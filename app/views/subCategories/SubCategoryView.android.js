import React, {useEffect, useState, useRef} from 'react';
import NetInfo from '@react-native-community/netinfo';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import SubCategoryNavigationHeaderComponent from '../../components/subCategories/SubCategoryNavigationHeaderComponent';
import SubCategoryItemsComponent from '../../components/subCategories/SubCategoryItemsComponent';
import Category from '../../models/Category';

import categorySyncService from '../../services/category_sync_service';

const SubCategoryView = ({route}) => {
  const listRef = useRef();
  const [playingUuid, setPlayingUuid] = useState(null);
  const [hasInternet, setHasInternet] = useState(false);
  const category = Category.findByUuid(route.params.uuid);
  const subCategories = Category.getSubCategories(route.params.uuid);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setHasInternet(state.isConnected && state.isInternetReachable)
    });

    return () => !!unsubscribe && unsubscribe();
  }, [])

  const onRefresh = () => {
    console.log('======= on refresh  =======')
    categorySyncService.syncData(1, () => {
      listRef.current?.stopRefreshLoading()
    })
  }

  return (
    <GradientScrollViewComponent
      ref={listRef}
      header={<SubCategoryNavigationHeaderComponent label={category.name} clearAudio={() => setPlayingUuid(null)} />}
      body={<SubCategoryItemsComponent items={subCategories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />}
      scrollViewStyle={subCategories.length == 0 ? {paddingHorizontal: 0, paddingBottom: 0} : {}}
      hasInternet={hasInternet}
      allowPullRefresh={true}
      refreshingAction={() => onRefresh()}
    />
  )
}

export default SubCategoryView;