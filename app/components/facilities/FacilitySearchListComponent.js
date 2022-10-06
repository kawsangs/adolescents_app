import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';

import color from '../../themes/color';
import {screenHorizontalPadding, cardBorderRadius} from '../../constants/component_constant';
import componentUtil from '../../utils/component_util';
import {largeFontSize} from '../../utils/font_size_util';

const FacilitySearchListComponent = () => {

  const renderListItems = (facilities, hasIcon) => {
    return facilities.map((facility, index) => {
      return (
        <TouchableOpacity key={index} style={styles.item}>
          <Text style={{fontSize: largeFontSize(), flex: 1}}>{facility.name}</Text>

          {hasIcon && <FeatherIcon name="search" size={20} color={color.paleBlackColor} />}
        </TouchableOpacity>
      )
    });
  }

  const renderList = () => {
    const defaultResults = {
      previousSearch: {
        label: "ធ្លាប់រកពីមុនមក",
        values: [
          {name: "រំលូត"},
          {name: "សុខភាពផ្លូវភេទ"},
          {name: "ជំងឺកាមរោគ"},
          {name: "សុខភាពផ្លូវចិត្ត"},
        ],
        hasIcon: false
      },
      frequentlySearch: {
        label: "ត្រូវបានរកញឹកញ៉ាប់",
        values: [
          {name: "រំលូតកូន"},
          {name: "ប្រដាប់ភេទ"},
        ],
        hasIcon: true
      }
    }

    let doms = [];
    for (let key in defaultResults) {
      const facilities = defaultResults[key].values;
      doms.push(
        <React.Fragment>
          <View style={{backgroundColor: 'transparent', height: 33, justifyContent: 'center', paddingLeft: 12}}>
            <Text style={{color: '#ebadd2', fontSize: largeFontSize()}}>{defaultResults[key].label}</Text>
          </View>
          {renderListItems(facilities, defaultResults[key].hasIcon)}
        </React.Fragment>
      );
    }
    return doms;
  }

  return (
    <View style={styles.container}>
      <View>
        {renderList()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: cardBorderRadius,
    backgroundColor: '#f4f1f9',
    elevation: 2,
    marginRight: screenHorizontalPadding,
    marginTop: 16,
    paddingBottom: 23
  },
  item: {
    alignItems: 'center',
    backgroundColor: color.whiteColor,
    flexDirection: 'row',
    height: componentUtil.mediumPressableItemSize(),
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f1f9'
  }
});

export default FacilitySearchListComponent;