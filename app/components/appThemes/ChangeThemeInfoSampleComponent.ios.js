import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Text } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

import GradientScrollViewComponent from '../shared/GradientScrollViewComponent';
import { backgroundColors } from '../../themes/color';

const changeThemeInfoSampleComponent = () => {
  const header = (bgColor) => {
    return (
      <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
        <IonIcon name="menu" size={12} color='white' />
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.headerLabel}>សុខភាពយុវជន</Text>
      </View>
    )
  }

  const items = [
    {
      color: '#1b91f7',
      backgroundColors: backgroundColors
    },
    {
      color: '#D46E01',
      backgroundColors: ["#f8a66f", "#D46E01"]
    },
  ];

  return (
    <View style={{flexDirection: 'row', marginBottom: 40, justifyContent: 'space-between'}}>
      { 
        items.map((item, index) => (
          <View style={styles.container} key={index}>
            <GradientScrollViewComponent
              backgroundColors={item.backgroundColors}
              header={header(item.color)}
              gradientContainerStyle={{borderRadius: 6}}
              isForSample={true}
            />
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 160,
  },
  headerContainer: {
    alignItems: 'center',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    width: '100%',
    height: 20,
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  headerLabel: {
    color: 'white',
    fontSize: 8,
    lineHeight: 12,
    marginTop: -2
  },
  logo: {
    width: 10,
    height: 10,
    marginHorizontal: 6,
  }
});

export default changeThemeInfoSampleComponent;