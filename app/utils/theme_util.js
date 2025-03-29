import { PixelRatio } from 'react-native';
import { XXHDPIRatio, XHDPIRatio, HDPIRatio } from '../constants/screen_size_constant';

const devicePixelRatio = Math.round(PixelRatio.roundToNearestPixel(PixelRatio.get()));

const themeUtil = (() => {
  return {
    getAndroidBackgroundImage,
    getiOSBackgroundImage
  }

  function getAndroidBackgroundImage(appTheme, isSample = false) {
    if (appTheme == null || appTheme.android_images == null)
      return '';

    const images = JSON.parse(appTheme.android_images);
    if (isSample)
      return images.mdpi;

    if (devicePixelRatio >= XXHDPIRatio)
      return images.xxhdpi
    else if (devicePixelRatio >= XHDPIRatio)
      return images.xhdpi;
    else if (devicePixelRatio >= HDPIRatio)
      return images.hdpi;
    else
      return images.mdpi;
  }

  function getiOSBackgroundImage(appTheme, isSample = false) {
    if (appTheme == null || appTheme.ios_images == null)
      return '';

    const images = JSON.parse(appTheme.ios_images);
    if (isSample)
      return images['1x'];

    if (devicePixelRatio >= XXHDPIRatio)
      return images['3x'];
    else if (devicePixelRatio >= XHDPIRatio)
      return images['2x'];
    else
      return images['1x'];
  }
})();

export default themeUtil;