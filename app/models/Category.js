import realm from '../db/schema';
// import categories from '../db/json/categories';
import categories from '../db/json/categories.json';

const MODEL = 'Category';

const Category = (() => {
  return {
    seedData,
    findByDisplayType,
    findByUuid,
    getParentCategories,
    getSubCategories,
    isParentCategory,
    isSubCategory,
    isLeafCategory,
  }

  function seedData() {
    realm.write(() => {
      categories.map((category) => {
        if (!findByUuid(category.uuid)) {
          realm.create(MODEL, category);
        }
      });
    })
  }

  function findByDisplayType(type) {
    return realm.objects(MODEL).filtered(`display = ${type}`);
  }

  function findByUuid(uuid) {
    return realm.objects(MODEL).filtered(`uuid = '${uuid}'`)[0];
  }

  function getParentCategories() {
    return realm.objects(MODEL).filtered(`parent_code = null || parent_code = '' SORT(order ASC)`);
  }

  function getSubCategories(uuid) {
    const category = findByUuid(uuid)
    return realm.objects(MODEL).filtered(`parent_code = '${category.code}'`);
  }

  function isParentCategory(uuid) {
    const category = findByUuid(uuid)
    return !!category && !category.parent_code;
  }

  function isSubCategory(uuid) {
    return getSubCategories(uuid).length > 0;
  }

  function isLeafCategory(uuid) {
    return getSubCategories(uuid).length == 0;
  }
})();

export default Category;