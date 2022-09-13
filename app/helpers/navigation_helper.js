import Category from '../models/Category';
import {navigationRef} from '../navigators/app_navigator';

const navigationHelper = (() => {
  return {
    navigateCategory
  }

  function navigateCategory(categoryUuid) {
    // if (Category.isLeafCategory(categoryUuid))
    //   navigationRef.current?.navigate('LeafCategoryDetailView', { uuid: categoryUuid });
    // else if (Category.isSubCategory(categoryUuid))
    //   navigationRef.current?.navigate('LeafCategoryView', { uuid: categoryUuid });
    // else
    //   navigationRef.current?.navigate('SubCategoryView', { uuid: categoryUuid });

    let routeName = 'LeafCategroyDetailView';
    if (Category.isParentCategory(categoryUuid))
      routeName = 'SubCategoryView';
    else if (Category.isSubCategory(categoryUuid))
      routeName = 'LeafCategoryView';

    navigationRef.current?.navigate(routeName, { uuid: categoryUuid });
  }
})();

export default navigationHelper;