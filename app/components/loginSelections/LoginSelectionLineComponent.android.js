import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import color from '../../themes/color';
import {mediumFontSize, xxLargeFontSize} from '../../utils/font_size_util';
import {getStyleOfDevice} from '../../utils/responsive_util';

const LoginSelectionLineComponent = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.label}>{t('or')}</Text>
      <View style={styles.line} />
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
    borderColor: color.whiteColor,
    borderBottomWidth: 1,
    flex: 1
  },
  label: {
    color: color.whiteColor,
    fontSize: getStyleOfDevice(xxLargeFontSize(), mediumFontSize()),
    marginHorizontal: 13,
    textAlign: 'center',
  }
});

export default LoginSelectionLineComponent;