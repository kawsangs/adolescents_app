import { StackActions } from '@react-navigation/native';

import User from '../models/User';
import Category from '../models/Category';
import {navigationRef} from '../navigators/app_navigator';
import asyncStorageService from './async_storage_service';
import {TEXT_SIZE} from '../constants/async_storage_constant';
import {xLargeFontSize} from '../utils/font_size_util';

const navigationService = (() => {
  return {
    logOut,
    navigateCategory,
  }

  function logOut() {
    User.logOut();
    navigationRef.current?.reset({ index: 0, routes: [{ name: 'LoginSelectionView' }]});
  }

  async function navigateCategory(categoryId) {
    const savedFontSize = await asyncStorageService.getItem(TEXT_SIZE);
    let routeName = Category.isParentCategory(categoryId) ? 'SubCategoryView' : 'LeafCategoryDetailView';
    navigationRef.current?.dispatch(StackActions.push(routeName, { id: categoryId, textSize: savedFontSize || xLargeFontSize() }))
  }
})();

export default navigationService;