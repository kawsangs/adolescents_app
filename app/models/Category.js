import BaseModel from './BaseModel';
import categories from '../db/json/categories.json';

class Category extends BaseModel {
  static seedData = () => {
    BaseModel.seedData(Category.name, categories);
  }

  static getAll = () => {
    return BaseModel.getAll(Category.name);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(Category.name, uuid);
  }

  static getParentCategories = () => {
    return this.findByAttr(Category.name, {parent_code: null}, '', {type: 'ASC', column: 'order'});
  }

  static getSubCategories = (uuid) => {
    const parentCategory = this.findByUuid(uuid);
    return this.findByAttr(Category.name, {parent_code: `'${parentCategory.code}'`}, '', {type: 'ASC', column: 'order'});
  }

  static isParentCategory = (uuid) => {
    const category = this.findByUuid(uuid)
    return !!category && !category.parent_code;
  }

  static isSubCategory = (uuid) => {
    return this.getSubCategories(uuid).length > 0;
  }
}

export default Category;