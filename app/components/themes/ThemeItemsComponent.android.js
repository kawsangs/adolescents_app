import React from 'react';
import {View, Text} from 'react-native'

import {cardElevation} from '../../constants/component_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/gridCardComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/gridCardComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const ThemeItemsComponent = (props) => {
  const renderCard = (item, index) => {
    return (
      <Card mode="elevated" elevation={cardElevation} key={item.id}
        style={[styles.container, props.containerStyle]}
        onPress={() => {}}
      >
        <Text>{ item.name }</Text>
      </Card>
    );
  }

  return (
    <View style={{ flexDirection: 'row',  flexWrap: 'wrap', justifyContent: 'space-between' }}>
      { props.items.map((item, index) => { return renderCard(item, index) }) }
    </View>
  );
}

export default ThemeItemsComponent;