import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {getStyleOfDevice} from '../utils/responsive_util';

export const defaultPickerSnapPoints = getStyleOfDevice(['60%'], ['65%']);
export const defaultPickerContentHeight = hp('55%');
export const contactSnapPoints = getStyleOfDevice(['32%'], ['44%']);
export const contactContentHeight = getStyleOfDevice('27%', '37.5%');
export const servicesSnapPoints = ['38%'];
export const servicesContentHeight = '33%';

const iOSMobileSnappoints = DeviceInfo.hasNotch() ? ['52%'] : ['56%']
const iOSMobileContentHeight = DeviceInfo.hasNotch() ? ['47%'] : ['51%']
export const signUpConfirmationSnapPoints = Platform.OS == 'ios' ? getStyleOfDevice(['35%'], iOSMobileSnappoints) : getStyleOfDevice(['42%'], ['59%']);
export const signUpConfirmationContentHeight = Platform.OS == 'ios' ? getStyleOfDevice('30%', iOSMobileContentHeight) : getStyleOfDevice('37%', '53%');