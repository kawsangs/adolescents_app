import React from 'react';
import {View} from 'react-native'

import HorizontalCardComponent from './HorizontalCardComponent';
import TiltedCardComponent from './TiltedCardComponent';
import GridCardComponent from './GridCardComponent';
import ComingSoonMessageComponent from './ComingSoonMessageComponent';
import {ROW_CARD, TILTED_CARD} from '../../constants/card_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';

const CardListComponent = (props) => {
  const renderCard = (item, index) => {
    switch (item.display) {
      case ROW_CARD:
        return <HorizontalCardComponent key={index}
                  index={index}
                  item={item}
                  containerStyle={{marginTop: 32}}
                  playingUuid={props.playingUuid}
                  updatePlayingUuid={props.updatePlayingUuid}
                />
        break;
      case TILTED_CARD:
        return <TiltedCardComponent key={index}
                  index={index}
                  item={item}
                  containerStyle={{marginTop: getStyleOfDevice(68, 46)}}
                  playingUuid={props.playingUuid}
                  updatePlayingUuid={props.updatePlayingUuid}
              />
        break;
      default:
        return <GridCardComponent key={index}
                  index={index}
                  item={item}
                  containerStyle={{marginTop: 14}}
                  playingUuid={props.playingUuid}
                  updatePlayingUuid={props.updatePlayingUuid}
              />
    }
  }

  if (props.items.length == 0)
    return <ComingSoonMessageComponent/>

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      { props.items.map((item, index) => { return renderCard(item, index) }) }
    </View>
  )
}

export default CardListComponent;