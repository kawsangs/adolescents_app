import User from '../models/User';
import Category from '../models/Category';
import {navigationRef} from '../navigators/app_navigator';

const navigationService = (() => {
  return {
    signOut,
    navigateCategory,
  }

  function signOut() {
    User.update(User.loggedInUser().uuid, { logged_in: false });
    navigationRef.current?.reset({ index: 0, routes: [{ name: 'LoginSelectionView' }]});
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

export default navigationService;