import User from '../models/User';
import {navigationRef} from '../navigators/app_navigator';

const navigationService = (() => {
  return {
    signOut,
  }

  function signOut() {
    const loggedInUser = User.loggedInUser();
    User.update(loggedInUser.uuid, { logged_in: false });
    navigationRef.current?.navigate('LoginSelectionView');
  }
})();

export default navigationService;