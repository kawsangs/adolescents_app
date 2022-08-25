import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import color from '../../../themes/color';
import {normalFontSize, smallFontSize} from '../../../utils/font_size_util';

const CardWithSoundWaveInfoComponent = () => {
  return (
    <View style={styles.infoContainer}>
      <View style={{flex: 1, paddingTop: 16}}>
        <Text numberOfLines={1} style={styles.title}>
          បម្រែបម្រួលរាង្គកាយក្មេងប្រុសនៅពេលពេញវ័យ
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          ជំងឺនានាដែលអ្នកគួរយល់ដឹងពាក់ពន្ធផ្លូវភេទ និងវិធីសាស្រ្តសម្រាប់ទប់ស្កាត់ និង បង្ការ ជាមួយមតិយោបល់នានាពីអ្នកឯកទេស
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Icon name="chevron-right" color={color.primaryColor} size={32} style={{marginTop: -15}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
  },
  title: {
    color: '#333333',
    fontSize: normalFontSize(),
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    color: color.blackColor,
    fontSize: smallFontSize(),
  }
});

export default CardWithSoundWaveInfoComponent;