import React, {useState} from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import NavigationHeaderBackButtonComponent from '../NavigationHeaderBackButtonComponent';
import NavigationHeaderButtonComponent from '../navigationHeaders/NavigationHeaderButtonComponent';
import NavigationHeaderTitleComponent from '../navigationHeaders/NavigationHeaderTitleComponent';
import FontSizeSettingModalComponent from '../FontSizeSettingModalComponent';
import {iOSHeaderWithAudioScrollDistance, navigationHeaderIconSize} from '../../../constants/component_constant';

const ScrollViewHeaderNavigationComponent = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const titleOpacity = props.scrollY.interpolate({
    inputRange: [0, iOSHeaderWithAudioScrollDistance],
    outputRange: [0, 1],
    extrapolate: 'extend'
  });

  const renderFontSettingButton = () => {
    return <NavigationHeaderButtonComponent onPress={() => setIsModalVisible(true)}
            icon={<Icon name="format-size" size={navigationHeaderIconSize} color={'white'} />}
          />
  }

  return (
    <Appbar.Header style={styles.container}>
      <NavigationHeaderBackButtonComponent/>
      <Animated.View style={{flex: 1, paddingLeft: 8, opacity: titleOpacity}}>
        <NavigationHeaderTitleComponent label={props.title} />
      </Animated.View>
      {renderFontSettingButton()}

      <FontSizeSettingModalComponent visible={isModalVisible} onDismiss={() => setIsModalVisible(false)} textSize={props.textSize} updateTextSize={props.updateTextSize} />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    elevation: 0,
  },
});

export default ScrollViewHeaderNavigationComponent;