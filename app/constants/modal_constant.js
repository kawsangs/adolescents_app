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


const confirmationiOSMobie = DeviceInfo.hasNotch() ? {snapPoints: ['52%'], height: '47%'} : {snapPoints: ['56%'], height: '51%'}
const confirmationAndroidMobile = isLowPixelDensityDevice() ? {snapPoints: ['59%'], height: '53%'} : {snapPoints: ['55.5%'], height: '49.5%'}
export const signUpConfirmationSnapPoints = Platform.OS == 'ios' ? getStyleOfDevice(['35%'], confirmationiOSMobie.snapPoints) : getStyleOfDevice(['44%'], confirmationAndroidMobile.snapPoints);
export const signUpConfirmationContentHeight = Platform.OS == 'ios' ? getStyleOfDevice('30%', confirmationiOSMobie.height) : getStyleOfDevice('39%', confirmationAndroidMobile.height);