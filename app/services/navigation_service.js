import User from '../models/User';
import Category from '../models/Category';
import {navigationRef} from '../navigators/app_navigator';

const navigationService = (() => {
  return {
    signOut,
    navigateCategory,
  }

  function signOut() {
    const user = new User();
    const loggedInUser = user.loggedInUser();
    user.update(loggedInUser.uuid, { logged_in: false });
    navigationRef.current?.reset({ index: 0, routes: [{ name: 'LoginSelectionView' }]});
  }

  function navigateCategory(categoryUuid) {
    const category = new Category();
    let routeName = 'LeafCategoryDetailView';
    if (category.isParentCategory(categoryUuid))
      routeName = 'SubCategoryView';
    else if (category.isSubCategory(categoryUuid))
      routeName = 'LeafCategoryView';

    navigationRef.current?.navigate(routeName, { uuid: categoryUuid });
  }
})();

export default navigationService;