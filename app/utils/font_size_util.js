import { PixelRatio } from 'react-native';
import { isShortScreenDevice, getStyleOfDevice } from './responsive_util';
import { XHDPIRatio } from '../constants/screen_size_constant';

const getMobileFontSizeByPixelRatio = (smallRatioFontSize, bigRatioFontSize) => {
  const devicePixelRatio = Math.round(PixelRatio.roundToNearestPixel(PixelRatio.get()));
  const fontSize = devicePixelRatio <= XHDPIRatio ? smallRatioFontSize : bigRatioFontSize;

  return isShortScreenDevice() ? fontSize - 1 : fontSize;
}

export const normalFontSize = () => {
  const mobileFontSize = getMobileFontSizeByPixelRatio(16, 14);
  return getStyleOfDevice(16, mobileFontSize);
}

export const smallFontSize = () => {
  const mobileFontSize = getMobileFontSizeByPixelRatio(14, 12);
  return getStyleOfDevice(14, mobileFontSize);
}