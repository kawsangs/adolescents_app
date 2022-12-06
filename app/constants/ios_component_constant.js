import DeviceInfo from 'react-native-device-info';
import { getStyleOfDevice } from '../utils/responsive_util';

export const iPhoneStatusBarHeight = 26;
export const iPhoneNotchHeight = 46;

const mobileMaxHeight = DeviceInfo.hasNotch() ? 270 : 250;
const mobileMinHeight = DeviceInfo.hasNotch() ? 200 : 180;
export const headerWithAudioMaxHeight = getStyleOfDevice(285, mobileMaxHeight);
export const headerWithAudioMinHeight = getStyleOfDevice(220, mobileMinHeight);
export const headerWithAudioScrollDistance = (headerWithAudioMaxHeight - headerWithAudioMinHeight);
export const gradientScrollViewBigPaddingBottom = DeviceInfo.hasNotch() ? 190 : getStyleOfDevice(170, 150);
export const gradientScrollViewPaddingBottom = DeviceInfo.hasNotch() ? 110 : getStyleOfDevice(90, 80);
export const scrollViewPaddingBottom = 74;