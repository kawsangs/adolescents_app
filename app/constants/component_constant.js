import { getStyleOfDevice } from '../utils/responsive_util';
import {largeFontSize, xLargeFontSize} from '../utils/font_size_util';

export const buttonBorderRadius = 10;
export const cardElevation = 2;
export const cardBorderRadius = 10;
export const outlinedButtonBorderWidth = 2.2;
export const headerWithAudioMaxHeight = getStyleOfDevice(265, 230);
export const headerWithAudioMinHeight = 170;
export const headerWithAudioScrollDistance = (headerWithAudioMaxHeight - headerWithAudioMinHeight);
export const screenPaddingHorizontal = 16;
export const navigationHeaderIconSize = 24;
export const navigationHeaderHorizontalPadding = getStyleOfDevice(32, 16);
export const screenHorizontalPadding = getStyleOfDevice(32, 16);
export const bottomTabBarHeight = 62;
export const scrollViewPaddingBottom = bottomTabBarHeight + 16;
export const cardTitleFontSize = xLargeFontSize();
export const descriptionFontSize = largeFontSize();
export const descriptionLineHeight = 28;
