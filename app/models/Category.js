import { compressToUTF16 } from 'lz-string';

import BaseModel from './BaseModel';
import categories from '../db/json/categories.json';
import uuidv4 from '../utils/uuidv4_util';
import categoryHelper from '../helpers/category_helper';

const MODEL = "Category";

class Category {
  static seedData = () => {
    categories.map(category => {
      const {children, content_sources, ...data} = category;
      this.create({...data, sources: categoryHelper.getFormattedSources(category.content_sources)})

      category.children.map(subCategory => {
        const {children, content_sources, ...data} = subCategory;
        this.create({...data, sources: categoryHelper.getFormattedSources(subCategory.content_sources)})
      });
    });
  }

  static create = (data) => {
    BaseModel.create(MODEL, {
      ...data,
      uuid: uuidv4(),
      description: !!data.description ? compressToUTF16(data.description) : null
    });
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

  static getSubCategories = (id) => {
    const parentCategory = this.findById(id);
    if (!parentCategory) return [];
    return BaseModel.findByAttr(MODEL, {parent_code: `'${parentCategory.code}'`});
  }

  static isParentCategory = (id) => {
    const category = this.findById(id)
    return !!category && !category.parent_code || this.getSubCategories(id).length > 0;
  }

  static deleteAll = () => {
    BaseModel.deleteAll(MODEL);
  }

  static deleteSubCategoriesByParent = (parentId) => {
    const parentCategory = this.findById(parentId);
    if (!parentCategory) return;

    const categories = this.getAll().filter(category => category.parent_code == parentCategory.code);
    if (categories.length > 0) {
      BaseModel.deleteByCollection(categories);
    }
  }
}

export default Category;