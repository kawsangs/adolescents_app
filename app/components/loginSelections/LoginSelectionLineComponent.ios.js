import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import color from '../../themes/color';
import {mediumFontSize} from '../../utils/font_size_util';

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
    height: 24,
    width: 138,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: color.whiteColor,
    flex: 1
  },
  label: {
    color: color.whiteColor,
    fontSize: mediumFontSize(),
    marginHorizontal: 13,
    textAlign: 'center',
  }
});

export default LoginSelectionLineComponent;