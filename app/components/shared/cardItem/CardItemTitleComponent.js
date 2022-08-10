import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import color from '../../../themes/color';

const CardItemTitleComponent = (props) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, marginTop: 4}}>
        <Text>{props.title}</Text>
        { props.subtitle && <Text>{props.subtitle}</Text>}
      </View>

      <Icon name="arrow-forward-outline" size={30} color={color.primaryColor} style={{alignSelf: 'flex-end', height: 30}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 4,
    borderWidth: 0
  }
});

export default CardItemTitleComponent;