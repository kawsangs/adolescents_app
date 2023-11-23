import React, {useEffect, useState, useRef} from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import SubCategoryNavigationHeaderComponent from '../../components/subCategories/SubCategoryNavigationHeaderComponent';
import SubCategoryItemsComponent from '../../components/subCategories/SubCategoryItemsComponent';
import Category from '../../models/Category';
import {gradientScrollViewBigPaddingBottom} from '../../constants/ios_component_constant';
import categorySyncService from '../../services/category_sync_service';
import {setParentCategories} from '../../features/parentCategories/parentCategorySlice';
import categoryHelper from '../../helpers/category_helper';

const SubCategoryView = ({route}) => {
  const listRef = useRef();
  const [playingUuid, setPlayingUuid] = useState(null);
  const [hasInternet, setHasInternet] = useState(false);
  const [subCategories, setSubCategories] = useState(Category.getSubCategories(route.params.id));
  const category = Category.findById(route.params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setHasInternet(state.isConnected && state.isInternetReachable)
    });

    return () => !!unsubscribe && unsubscribe();
  }, [])

  const onRefresh = () => {
    categorySyncService.syncByParentCategory(route.params.id, () => {
      setTimeout(() => {
        setSubCategories([...Category.getSubCategories(route.params.id)])
      }, 1000);
      dispatch(setParentCategories(categoryHelper.getHomeCategories()))
      listRef.current?.stopRefreshLoading()
    }, () => listRef.current?.stopRefreshLoading());
  }

  return (
    <GradientScrollViewComponent
      ref={listRef}
      header={<SubCategoryNavigationHeaderComponent label={category.name} clearAudio={() => setPlayingUuid(null)} />}
      body={<SubCategoryItemsComponent items={subCategories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />}
      scrollViewStyle={subCategories.length == 0 ? {paddingHorizontal: 0, paddingBottom: 0} : {paddingBottom: gradientScrollViewBigPaddingBottom}}
      hasInternet={hasInternet}
      allowPullRefresh={true}
      refreshingAction={() => onRefresh()}
    />
  )
}

export default SubCategoryView;