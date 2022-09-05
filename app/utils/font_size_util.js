import { PixelRatio, Dimensions } from 'react-native';
import { isShortScreenDevice, getStyleOfDevice } from './responsive_util';
import { XHDPIRatio } from '../constants/screen_size_constant';

const getMobileFontSizeByPixelRatio = (smallRatioFontSize, bigRatioFontSize) => {
  const devicePixelRatio = Math.round(PixelRatio.roundToNearestPixel(PixelRatio.get()));
  const fontSize = devicePixelRatio <= XHDPIRatio ? smallRatioFontSize : bigRatioFontSize;

  return isShortScreenDevice() ? fontSize - 1 : fontSize;
}

export const bigFontSize = () => {
  return getStyleOfDevice(18, mobileFontSize(16));
}

export const normalFontSize = () => {
  return getStyleOfDevice(16, mobileFontSize(14));
}

export const smallFontSize = () => {
  return getStyleOfDevice(14, mobileFontSize(12));
}

export const mobileFontSize = (size) => {
  const scale = Dimensions.get('window').width / 320;
  const devicePixelRatio = Math.round(PixelRatio.roundToNearestPixel(PixelRatio.get()));
  if (devicePixelRatio <= XHDPIRatio)
    return size - scale;

  return size;
}