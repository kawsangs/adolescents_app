import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {getStyleOfDevice, isLowPixelDensityDevice, isShortScreenDevice} from '../utils/responsive_util';

export const defaultPickerSnapPoints = getStyleOfDevice(['60%'], ['65%']);
export const defaultPickerContentHeight = hp('55%');
export const contactSnapPoints = getStyleOfDevice(['32%'], ['44%']);
export const contactContentHeight = getStyleOfDevice('27%', '37.5%');
export const servicesSnapPoints = ['38%'];
export const servicesContentHeight = '33%';

const confirmationiOSMobile = DeviceInfo.hasNotch() ? {snapPoints: ['46%'], height: '43%'} : isLowPixelDensityDevice() ? {snapPoints: ['53%'], height: '57%'} : {snapPoints: ['50%'], height: '44%'}
const confirmationAndroidMobile = isLowPixelDensityDevice() ? {snapPoints: ['56%'], height: '50%'} : {snapPoints: ['52%'], height: '46%'}
export const signUpConfirmationSnapPoints = Platform.OS == 'ios' ? getStyleOfDevice(['32%'], confirmationiOSMobile.snapPoints) : getStyleOfDevice(['41%'], confirmationAndroidMobile.snapPoints);
export const signUpConfirmationContentHeight = Platform.OS == 'ios' ? getStyleOfDevice('25%', confirmationiOSMobile.height) : getStyleOfDevice('36%', confirmationAndroidMobile.height);
export const videoFilterSnapPoints = getStyleOfDevice(['52%'], ['65%']);
export const videoFilterContentHeight = getStyleOfDevice(hp('47%'), hp('60%'));

export const androidOccupationSnapPoints = getStyleOfDevice(['55%'], isShortScreenDevice() ? ['72.8%'] : ['65.6%']);
export const androidOccupationContentHeight = getStyleOfDevice(462, isShortScreenDevice() ? 455 : 458);
export const iosOccupationSnapPoints = getStyleOfDevice(['45%'], DeviceInfo.hasNotch() ? ['60%'] : isShortScreenDevice() ? ['71%'] : ['65%']);
export const iosOccupationContentHeight = getStyleOfDevice( 440, DeviceInfo.hasNotch() ? 452 : isShortScreenDevice() ? 450 : 454);

export const androidEducationLevelSnapPoints = getStyleOfDevice(['40%'], isShortScreenDevice() ? ['54%'] : ['48%']);
export const androidEducationLevelContentHeight = getStyleOfDevice(333, isShortScreenDevice() ? 327 : 329);
export const iosEducationLevelSnapPoints = getStyleOfDevice(['34%'], DeviceInfo.hasNotch() ? ['45%'] : isShortScreenDevice() ? ['52%'] : ['48%']);
export const iosEducationLevelContentHeight = getStyleOfDevice(320, DeviceInfo.hasNotch() ? 325 : isShortScreenDevice() ? 322 : 325);