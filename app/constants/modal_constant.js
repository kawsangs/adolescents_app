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

export const androidOccupationSnapPoints = isShortScreenDevice() ? ['80.5%'] : ['65.6%'];
export const androidOccupationContentHeight = isShortScreenDevice() ? 512 : 458;
export const iosOccupationSnapPoints = DeviceInfo.hasNotch() ? ['66%'] : isShortScreenDevice() ? ['79%'] : ['72%'];
export const iosOccupationContentHeight = DeviceInfo.hasNotch() ? 490 : isShortScreenDevice() ? 500 : 500;

export const androidEducationLevelSnapPoints = isShortScreenDevice() ? ['80.5%'] : ['48%'];
export const androidEducationLevelContentHeight = isShortScreenDevice() ? 512 : 329;