import React from 'react';
import {View, TouchableOpacity, ImageBackground} from 'react-native';
import {Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

import { backgroundColors } from '../../themes/color';
import fileUtil from '../../utils/file_util';
import themeUtil from '../../utils/theme_util';
import styles from '../../assets/stylesheets/mobile/appThemeSampleComponentStyles';

const AppThemeSampleComponent = (props) => {
  const appTheme = useSelector(state => state.appTheme.value);
  const getBackgroundColors = () => {
    if (props.theme == null)
      return backgroundColors;

    return [props.theme.secondary_color, props.theme.primary_color];
  }

  return (
    <View style={{marginBottom: 20, width: 75}}>
      <TouchableOpacity
        onPress={() => props.onSelect()}
        style={styles.appContainer}
      >
        <LinearGradient
          colors={getBackgroundColors()}
          start={{x: -0.7, y: 0.2}} end={{x: 1, y: 1}}
          style={{height: '100%', width: '100%', borderRadius: 6, backgroundColor: getBackgroundColors()}}
        >
          { !!props.theme.android_images &&
            <ImageBackground
              source={fileUtil.getSourceByUrl(themeUtil.getAndroidBackgroundImage(props.theme, true), 'image')}
              style={{height: '100%', width: '100%'}}
              imageStyle={{borderRadius: 6}}
            />
          }
        </LinearGradient>
      </TouchableOpacity>
      <Text style={{marginTop: 3, fontSize: 12, textAlign: 'center', color: appTheme.primary_text_color}}>
        {props.theme.name}
      </Text>
    </View>
  );
}

export default AppThemeSampleComponent;