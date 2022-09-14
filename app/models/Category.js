
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

    // console.log('Import category === ', categories)

    realm.write(() => {
      categories.map((category) => {
        if (!findByUuid(category.uuid)) {
          console.log('Import to ream =======')
          realm.create(MODEL, {...category, updated_at: Moment().toDate()});
        }
      });
    })
  }

  function findByDisplayType(type) {
    // return categories.filter(category => category.display == type);

    // return realm.objects(MODEL);
    return realm.objects(MODEL).filtered(`display = ${type}`);
  }

  function findByUuid(uuid) {
    return realm.objects(MODEL).filtered(`uuid = '${uuid}'`)[0];
  }

  function getSubCategories(uuid) {
    const category = findByUuid(uuid)
    return realm.objects(MODEL).filtered(`parent_id = ${category.id}`);

    // const category = findByUuid(uuid);
    // return categories.filter(item => item.parent_id == category.id);
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