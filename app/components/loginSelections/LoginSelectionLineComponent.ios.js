import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';
import color from '../../themes/color';
import {mediumFontSize, xxLargeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';

const LoginSelectionLineComponent = () => {
  const {t} = useTranslation();
  const appTheme = useSelector(state => state.appTheme.value);
  const textColor = appTheme.primary_text_color ?? color.whiteColor;
  return (
    <View style={styles.container}>
      <View style={[styles.line, { borderColor: textColor }]} />
      <Text style={[styles.label, { color: textColor }]}>{t('or')}</Text>
      <View style={[styles.line, { borderColor: textColor }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 12,
    height: getStyleOfDevice(40, 24),
    width: 138,
  },
  line: {
    borderBottomWidth: 1,
    flex: 1
  },
  label: {
    fontSize: getStyleOfDevice(xxLargeFontSize(), mediumFontSize()),
    marginHorizontal: 13,
    textAlign: 'center',
  }
});

export default LoginSelectionLineComponent;