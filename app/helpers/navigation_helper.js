import Category from '../models/Category';
import {navigationRef} from '../navigators/app_navigator';

const navigationHelper = (() => {
  return {
    navigateCategory
  }

  function navigateCategory(categoryUuid) {
    let routeName = 'LeafCategoryDetailView';
    if (Category.isParentCategory(categoryUuid))
      routeName = 'SubCategoryView';
    else if (Category.isSubCategory(categoryUuid))
      routeName = 'LeafCategoryView';

    navigationRef.current?.navigate(routeName, { uuid: categoryUuid });
  }
})();

export default navigationHelper;