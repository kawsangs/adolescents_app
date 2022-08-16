import { Dimensions, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info'

import { smallMobileHeight, mediumMobileHeight, smallWidthMobile, XXHDPIRatio } from '../constants/screen_size_constant';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

export const getStyleOfDevice = (tabletStyle, mobileStyle) => {
  return DeviceInfo.isTablet() ? tabletStyle : mobileStyle;
}

export const isShortScreenDevice = () => {
  return screenHeight <= smallMobileHeight;
}

export const isShortWidthScreen = () => {
  return screenWidth <= smallWidthMobile;
}

export const isMediumScreenDevice = () => {
  return screenHeight <= mediumMobileHeight && !isShortScreenDevice();
}