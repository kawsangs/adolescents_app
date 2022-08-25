import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import PlayAudio from '../PlayAudio';
import color from '../../../themes/color';
import { getStyleOfDevice } from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/cardInfoComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/cardInfoComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const CardInfoComponent = (props) => {
  return (
    <Card.Content style={styles.container}>
      <View style={{flex: 1}}>
        <PlayAudio
          playIcon='volume-2'
          pauseIcon='pause-outline'
          size={28}
          color={color.primaryColor}
        />
        <Card.Title
          title={ props.title }
          subtitle={props.subtitle}
          style={{paddingLeft: 0}}
        />
      </View>
      <Icon name="arrow-forward-outline" size={getStyleOfDevice(30, 25)} color={color.primaryColor} style={styles.arrowIcon} />
    </Card.Content>
  )
}

export default CardInfoComponent;

// How to use
// <CardInfoComponent title='Card title' subtitle='Card subtitle'/>