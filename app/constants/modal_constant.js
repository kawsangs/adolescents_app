import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {getStyleOfDevice} from '../utils/responsive_util';

export const defaultPickerSnapPoints = getStyleOfDevice(['60%'], ['65%']);
export const defaultPickerContentHeight = hp('55%');
export const contactSnapPoints = getStyleOfDevice(['32%'], ['44%']);
export const contactContentHeight = getStyleOfDevice('27%', '37.5%');
export const servicesSnapPoints = ['38%'];
export const servicesContentHeight = '33%';
// export const signUpConfirmationSnapPoints = getStyleOfDevice(['38%'], ['50%']);
// export const signUpConfirmationContentHeight = getStyleOfDevice('33%', '45%');

export const signUpConfirmationSnapPoints = getStyleOfDevice(['42%'], ['59%']);
export const signUpConfirmationContentHeight = getStyleOfDevice('37%', '53%');