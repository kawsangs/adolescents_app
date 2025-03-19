import { PixelRatio } from 'react-native';
import { XXHDPIRatio, XHDPIRatio, HDPIRatio } from '../constants/screen_size_constant';

const themeUtil = (() => {
  return {
    getAndroidBackgroundImage
  }

  function getAndroidBackgroundImage(appTheme) {
    if (appTheme == null || appTheme.android_images == null)
      return '';

    const images = JSON.parse(appTheme.android_images);
    const devicePixelRatio = Math.round(PixelRatio.roundToNearestPixel(PixelRatio.get()));

    if (devicePixelRatio >= XXHDPIRatio)
      return images.xxhdpi
    else if (devicePixelRatio >= XHDPIRatio)
      return images.xhdpi;
    else if (devicePixelRatio >= HDPIRatio)
      return images.hdpi;
    else
      return images.mdpi;
  }
})();

export default themeUtil;