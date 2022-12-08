import DeviceInfo from 'react-native-device-info';
import { getStyleOfDevice } from '../utils/responsive_util';

export const iPhoneStatusBarHeight = 26;
export const iPhoneNotchHeight = DeviceInfo.hasDynamicIsland() ? 59 : 46;

const mobileMaxHeight = DeviceInfo.hasNotch() ? 270 : 250;
const mobileMinHeight = DeviceInfo.hasNotch() ? 200 : 180;
export const headerWithAudioMaxHeight = getStyleOfDevice(285, mobileMaxHeight);
export const headerWithAudioMinHeight = getStyleOfDevice(220, mobileMinHeight);
export const headerWithAudioScrollDistance = (headerWithAudioMaxHeight - headerWithAudioMinHeight);
export const gradientScrollViewPaddingBottom = 150;
export const scrollViewPaddingBottom = 74;