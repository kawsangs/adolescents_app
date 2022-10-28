import React from 'react';
import {View} from 'react-native'

import HorizontalCardComponent from './HorizontalCardComponent';
import TiltedCardComponent from './TiltedCardComponent';
import GridCardComponent from './GridCardComponent';
import CardWithSoundWaveComponent from './CardWithSoundWaveComponent';
import {ROW_CARD, TILTED_CARD, GRID_CARD} from '../../constants/card_constant';

const CardListComponent = (props) => {
  const renderCard = (item, index) => {
    switch (item.display) {
      case ROW_CARD:
        return <HorizontalCardComponent key={index}
                  item={item}
                  containerStyle={{marginTop: 32}}
                  playingUuid={props.playingUuid}
                  updatePlayingUuid={props.updatePlayingUuid}
                />
        break;
      case TILTED_CARD:
        return <TiltedCardComponent key={index}
                  item={item}
                  containerStyle={{marginTop: 54}}
                  playingUuid={props.playingUuid}
                  updatePlayingUuid={props.updatePlayingUuid}
              />
        break;
      case GRID_CARD:
        return <GridCardComponent key={index}
                  item={item}
                  containerStyle={{marginTop: 14}}
                  playingUuid={props.playingUuid}
                  updatePlayingUuid={props.updatePlayingUuid}
              />
        break;
      default:
        return <CardWithSoundWaveComponent
                key={index}
                item={item}
                playingUuid={props.playingUuid}
                updatePlayingUuid={props.updatePlayingUuid}
              />
    }
  }

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      { props.items.map((item, index) => {
          return renderCard(item, index);
        })
      }
    </View>
  )
}

export default CardListComponent;