import React from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import {Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import { backgroundColors } from '../../themes/color';
import fileUtil from '../../utils/file_util';
import themeUtil from '../../utils/theme_util';
import {getStyleOfDevice} from '../../utils/responsive_util';
import mobileStyles from '../../assets/stylesheets/mobile/homeAppThemeSampleComponentStyles';
import tabletStyles from '../../assets/stylesheets/tablet/homeAppThemeSampleComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const HomeAppThemeSampleComponent = (props) => {
  const names = props.theme.name.split(' ');
  const getBackgroundColors = () => {
    if (props.theme == null)
      return backgroundColors;

    return [props.theme.secondary_color, props.theme.primary_color];
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.onSelect()}
        style={styles.appThemeContainer}
      >
        <LinearGradient
          colors={getBackgroundColors()}
          start={{x: -0.7, y: 0.2}} end={{x: 1, y: 1}}
          style={{height: '100%', width: '100%', borderRadius: 6, backgroundColor: getBackgroundColors()}}
        >
          { !!props.theme.android_images &&
            <ImageBackground
              source={fileUtil.getSourceByUrl(themeUtil.getiOSBackgroundImage(props.theme, true), 'image')}
              style={{height: '100%', width: '100%'}}
              imageStyle={{borderRadius: 6}}
            />
          }
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.label}>
        { names[0] }
      </Text>
      <Text style={styles.label}>
        { names[1] }
      </Text>
    </View>
  );
}

export default HomeAppThemeSampleComponent;