
import Moment from 'moment';
import realm from '../db/schema';
import categories from '../db/json/categories';

const MODEL = 'Category';

const Category = (() => {
  return {
    seedData,
    findByDisplayType,
    findByUuid,
    getSubCategories,
    isParentCategory,
    isSubCategory,
    isLeafCategory,
  }

  function seedData() {
    realm.write(() => {
      categories.map((category) => {
        if (!findByUuid(category.uuid)) {
          realm.create(MODEL, {...category, updated_at: Moment().toDate()});
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

  function getSubCategories(uuid) {
    const category = findByUuid(uuid)
    return realm.objects(MODEL).filtered(`parent_id = ${category.id}`);
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