import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import ClinicCardTitleComponent from './ClinicCardTitleComponent';
import ClinicCardViewMapButtonComponent from './ClinicCardViewMapButtonComponent';
import color from '../../themes/color';
import {descriptionFontSize} from '../../constants/component_constant';

const ClinicCardInfoComponent = (props) => {
  const renderViewMapBtn = () => {
    return <ClinicCardViewMapButtonComponent/>
  }

  const renderTitle = () => {
    return <ClinicCardTitleComponent/>
  }

  return (
    <View style={{flex: 3, paddingBottom: 8}}>
      { renderTitle() }
      <View style={{flexDirection: 'row', flex: 1, marginTop: 8, paddingHorizontal: 8}}>
        <Text style={styles.label} numberOfLines={2}>ឯកទេសផ្នែកជំងឺផ្លូវចិត្ត បញ្ហាផ្លូវភេទ និងសខុភាពបន្តរពូជ និងសខុភាពបន្តរពូជ</Text>
        <Icon name="chevron-right" color={color.primaryColor} size={32} style={{alignSelf: 'center', marginTop: -6 }} />
      </View>
      { renderViewMapBtn() }
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: descriptionFontSize,
    flex: 1,
    marginRight: 8
  },
});

export default ClinicCardInfoComponent;