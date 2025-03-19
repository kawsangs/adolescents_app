import React, {useCallback, useEffect, useState, useRef} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';
import BottomSheet from "@gorhom/bottom-sheet";

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import HomeNavigationHeaderComponent from '../../components/home/HomeNavigationHeaderComponent';
import CardListComponent from '../../components/shared/CardListComponent';
import ThemeBottomSheetComponent from '../../components/appThemes/ThemeBottomSheetComponent';
import FormBottomSheetModalComponent from '../../components/shared/FormBottomSheetModalComponent';
import ChangeThemeInfoModalComponent from '../../components/appThemes/ChangeThemeInfoModalComponent';

import syncService from '../../services/sync_service';
import audioPlayerService from '../../services/audio_player_service';
import MobileTokenService from '../../services/mobile_token_service';
import themeService from '../../services/theme_service';
import networkService from '../../services/network_service';
import categoryHelper from '../../helpers/category_helper';
import {setParentCategories} from '../../features/parentCategories/parentCategorySlice';
import color from '../../themes/color';
import { appThemeSnapPoints } from '../../constants/modal_constant';

const HomeView = (props) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const categories = useSelector(state => state.parentCategory.value)
  const dispatch = useDispatch();
  let bottomSheetRef = React.createRef();
  let modalRef = useRef(null);

  useEffect(() => {
    dispatch(setParentCategories(categoryHelper.getHomeCategories()))
    let previousStatus = false;  // we store the previousStatus in order to prevent the syncUsers from calling twice when has internet connection
    const unsubscribeNetInfo = NetInfo.addEventListener((state) => {
      if (state.isConnected && state.isInternetReachable != previousStatus && state.isInternetReachable) {
        syncService.syncUsersAndDependencies();
        MobileTokenService.handleSyncingToken();
      }

      if (previousStatus != state.isInternetReachable) previousStatus = state.isInternetReachable;
    });

    networkService.checkConnection(() => {
      themeService.syncData();
    });

    return () => { unsubscribeNetInfo && unsubscribeNetInfo() }
  }, []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        setPlayingUuid(null);
        setTimeout(() => {
          audioPlayerService.clearAllAudio();
        }, 100);
      }
    }, [])
  );

  const showThemeModal = () => {
    bottomSheetRef.current?.setBodyContent(
      <ThemeBottomSheetComponent bottomSheetRef={modalRef} closeBottomSheet={() => modalRef.current?.dismiss()} />
    );
    bottomSheetRef.current?.setSnapPoints(appThemeSnapPoints);
    modalRef.current?.present();
  }

  const renderBody = () => {
    return (
      <View>
        <CardListComponent items={categories} playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />
        
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={styles.editThemeButton}
        >
          <IonIcon name="color-palette-outline" size={24} color={color.primaryColor} />
          <Text style={styles.buttonLabel}>ជម្រើសផ្ទៃអេក្រង់</Text>
        </TouchableOpacity>

        <FormBottomSheetModalComponent ref={bottomSheetRef} formModalRef={modalRef} snapPoints={appThemeSnapPoints} onDismiss={() => bottomSheetRef.current?.setBodyContent(null)} />
        <ChangeThemeInfoModalComponent
          visible={isModalVisible}
          onDismiss={() => setIsModalVisible(false)}
          onTryNow={() => {
            setIsModalVisible(false);
            showThemeModal();
          }}
        />
      </View>
    )
  }

  return (
    <GradientScrollViewComponent
      header={<HomeNavigationHeaderComponent navigation={props.navigation}/>}
      body={renderBody()}
    />
  )
}

const styles = StyleSheet.create({
  editThemeButton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 48,
    marginTop: 32,
    paddingHorizontal: 16,
  },
  buttonLabel: {
    color: color.primaryColor,
    fontSize: 16,
    marginLeft: 10,
  }
});

export default HomeView