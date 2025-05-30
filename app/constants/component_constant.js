import {Platform} from 'react-native';
import { getStyleOfDevice, isLowPixelDensityDevice } from '../utils/responsive_util';
import {xLargeFontSize, largeFontSize, mediumFontSize} from '../utils/font_size_util';

export const buttonBorderRadius = 10;
export const cardElevation = 2;
export const cardBorderRadius = 10;
export const outlinedButtonBorderWidth = 2.2;
export const navigationHeaderIconSize = 24;
export const navigationHeaderHorizontalPadding = getStyleOfDevice(16, 6);
export const navigationHeaderHeight = Platform.OS == 'ios' ? 56 : 56;
export const screenHorizontalPadding = getStyleOfDevice(32, 16);
export const bottomTabBarHeight = 62;
export const scrollViewPaddingBottom = bottomTabBarHeight + 18;
export const cardTitleFontSize = getStyleOfDevice(largeFontSize(), mediumFontSize());
export const descriptionFontSize = largeFontSize();
export const descriptionLineHeight = getStyleOfDevice(38, isLowPixelDensityDevice() ? 28 : 36);
export const navHeaderHeight = 56;
export const androidBigTabletWidth = 800;
export const gradientScrollViewBigPaddingBottom = getStyleOfDevice(170, 125);
export const gradientScrollViewPaddingBottom = getStyleOfDevice(90, 80);
export const cardTitleLineHeight = getStyleOfDevice(Platform.OS == 'ios' ? 32 : 30, 28);
export const totalNavigationHeaderHorizontalPadding = 32;