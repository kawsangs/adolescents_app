import BaseModel from './BaseModel';
import categories from '../db/json/categories.json';
import uuidv4 from '../utils/uuidv4_util';
import categoryHelper from '../helpers/category_helper';

const MODEL = "Category";

class Category {
  static seedData = () => {
    categories.map(category => {
      const {children, content_sources, lft, rgt, ...data} = category;
      this.create({...data, sources: categoryHelper.getFormattedSources(category.content_sources)})

      category.children.map(subCategory => {
        const {children, content_sources, lft, rgt, ...data} = subCategory;
        this.create({...data, sources: categoryHelper.getFormattedSources(subCategory.content_sources)})
      });
    });
  }

  static create = (data) => {
    BaseModel.create(MODEL, {...data, uuid: uuidv4()});
  }

  static update = (uuid, data) => {
    BaseModel.update(MODEL, uuid, data)
  }

  static getAll = () => {
    return BaseModel.getAll(MODEL);
  }

  static findByUuid = (uuid) => {
    return BaseModel.findByUuid(MODEL, uuid);
  }

  static findById = (id) => {
    return BaseModel.findByAttr(MODEL, { id: `'${id}'` })[0];
  }

  static getParentCategories = () => {
    return BaseModel.findByAttr(MODEL, {parent_code: null});
  }

  static getSubCategories = (uuid) => {
    const parentCategory = this.findByUuid(uuid);
    if (!parentCategory) return [];
    return BaseModel.findByAttr(MODEL, {parent_code: `'${parentCategory.code}'`});
  }

  static isParentCategory = (uuid) => {
    const category = this.findByUuid(uuid)
    return !!category && !category.parent_code;
  }

  static isSubCategory = (uuid) => {
    return this.getSubCategories(uuid).length > 0;
  }

  static deleteAll = () => {
    BaseModel.deleteAll(MODEL);
  }
}

export default Category;