import categories from '../db/json/categories';

const Category = (() => {
  return {
    findByDisplayType,
    findByUuid,
    getSubCategories,
    isParentCategory,
    isSubCategory,
    isLeafCategory,
  }

  function findByDisplayType(type) {
    return categories.filter(category => category.display == type);
  }

  function findByUuid(uuid) {
    return categories.filter(category => category.uuid == uuid)[0];
  }

  function getSubCategories(uuid) {
    const category = findByUuid(uuid);
    return categories.filter(item => item.parent_id == category.id);
  }

  function isParentCategory(uuid) {
    const category = findByUuid(uuid)
    return !!category && !category.parent_id;
  }

  function isSubCategory(uuid) {
    return getSubCategories(uuid).length > 0;
  }

  function isLeafCategory(uuid) {
    return getSubCategories(uuid).length == 0;
  }
})();

export default Category;