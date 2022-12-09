import BaseModel from './BaseModel';
import categories from '../db/json/categories.json';

const MODEL = "Category";

class Category {
  static seedData = () => {
    BaseModel.seedData(MODEL, categories);
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static getParentCategories = () => {
    return BaseModel.findByAttr(MODEL, {parent_code: null}, '', {type: 'ASC', column: 'order'});
  }

  static getSubCategories = (uuid) => {
    const parentCategory = this.findByUuid(uuid);
    return BaseModel.findByAttr(MODEL, {parent_code: `'${parentCategory.code}'`}, '', {type: 'ASC', column: 'order'});
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