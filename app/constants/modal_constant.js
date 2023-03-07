import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {getStyleOfDevice, isLowPixelDensityDevice} from '../utils/responsive_util';

export const defaultPickerSnapPoints = getStyleOfDevice(['60%'], ['65%']);
export const defaultPickerContentHeight = hp('55%');
export const contactSnapPoints = getStyleOfDevice(['32%'], ['44%']);
export const contactContentHeight = getStyleOfDevice('27%', '37.5%');
export const servicesSnapPoints = ['38%'];
export const servicesContentHeight = '33%';

const confirmationiOSMobie = DeviceInfo.hasNotch() ? {snapPoints: ['46%'], height: '43%'} : isLowPixelDensityDevice() ? {snapPoints: ['53%'], height: '57%'} : {snapPoints: ['50%'], height: '44%'}
const confirmationAndroidMobile = isLowPixelDensityDevice() ? {snapPoints: ['54%'], height: '48%'} : {snapPoints: ['50%'], height: '44%'}
export const signUpConfirmationSnapPoints = Platform.OS == 'ios' ? getStyleOfDevice(['32%'], confirmationiOSMobie.snapPoints) : getStyleOfDevice(['41%'], confirmationAndroidMobile.snapPoints);
export const signUpConfirmationContentHeight = Platform.OS == 'ios' ? getStyleOfDevice('25%', confirmationiOSMobie.height) : getStyleOfDevice('36%', confirmationAndroidMobile.height);