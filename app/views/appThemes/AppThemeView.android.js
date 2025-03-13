import React, {useEffect, useState, useRef} from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';
import {useTranslation} from 'react-i18next';

import {ActivityIndicator, View} from 'react-native';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import ThemeItemsComponent from '../../components/themes/ThemeItemsComponent';
import Theme from '../../models/Theme';
import themeService from '../../services/theme_service';
import networkService from '../../services/network_service';
import color from '../../themes/color';

const ThemeView = () => {
  const {t} = useTranslation();
  const listRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [hasInternet, setHasInternet] = useState(false);
  const [themes, setThemes] = useState(Theme.getAll());

  useEffect(() => {

    console.log('==== APP theme use effect ====');

    setIsLoading(true);
    themeService.syncData(() => {
      setThemes(Theme.getAll());
      setIsLoading(false);
    }, () => {
      setIsLoading(false);
    });


    // networkService.checkConnection(() => {
    //   setIsLoading(true);
    //   themeService.syncData(() => {
    //     setThemes(Theme.getAll());
    //     setIsLoading(false);
    //   }, () => {
    //     setIsLoading(false);
    //   });
    // });
  }, []);

  const onRefresh = () => {
    themeService.syncData(() => {
      setThemes(Theme.getAll());
      listRef.current?.stopRefreshLoading();
    }, () => listRef.current?.stopRefreshLoading());
  }

  const renderContent = () => {
    if (isLoading)
      return <View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size="large" color={color.whiteColor} /></View>

    return <ThemeItemsComponent items={themes} />
  }

  return (
    <GradientScrollViewComponent
      ref={listRef}
      header={<NavigationHeaderWithBackButtonComponent label={t('theme')} />}
      body={renderContent()}
      scrollViewStyle={themes.length == 0 ? {paddingHorizontal: 0, paddingBottom: 0} : {}}
      hasInternet={hasInternet}
      allowPullRefresh={true}
      refreshingAction={() => onRefresh()}
    />
  );
}

export default ThemeView;