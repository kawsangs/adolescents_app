import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {getStyleOfDevice} from '../utils/responsive_util';

export const defaultPickerSnapPoints = getStyleOfDevice(['60%'], ['65%']);
// export const defaultPickerContentHeight = getStyleOfDevice('58%', '59%')
export const defaultPickerContentHeight = getStyleOfDevice(hp('55%'), hp('55%'))
export const contactSnapPoints = getStyleOfDevice(['32%'], ['44%']);
export const contactContentHeight = getStyleOfDevice('27%', '37.5%');
export const servicesSnapPoints = ['38%'];
export const servicesContentHeight = '33%';