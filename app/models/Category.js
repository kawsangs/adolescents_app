import BaseModel from './BaseModel';

const MODEL = 'Category';

class Category extends BaseModel {
  constructor() {
    super(MODEL);
  }

  getParentCategories = () => {
    return this.findByAttr({parent_code: null}, '', {type: 'ASC', column: 'order'});
  }

  getSubCategories = (uuid) => {
    const parentCategory = this.findByUuid(uuid);
    return this.findByAttr({parent_code: `'${parentCategory.code}'`}, '', {type: 'ASC', column: 'order'});
  }

  isParentCategory = (uuid) => {
    const category = this.findByUuid(uuid)
    return !!category && !category.parent_code;
  }

  isSubCategory = (uuid) => {
    return this.getSubCategories(uuid).length > 0;
  }
}

export default Category;