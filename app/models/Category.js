import categories from '../db/json/categories';

const Category = (() => {
  return {
    findByDisplayType,
    findByUuid,
    getChildCategory,
  }

  function findByDisplayType(type) {
    return categories.filter(category => category.display == type);
  }

  function findByUuid(uuid) {
    return categories.filter(category => category.uuid == uuid)[0];
  }

  function getChildCategory(uuid) {
    const category = findByUuid(uuid);
    return categories.filter(item => item.parent_id == category.id);
  }
})();

export default Category;