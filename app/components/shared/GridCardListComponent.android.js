import React from 'react';
import {View} from 'react-native';

import GridCardComponent from './GridCardComponent';

const GridCardListComponent = (props) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 8}}>
      { props.items.map((item, index) => {
          return <GridCardComponent key={index}
                    containerStyle={{marginTop: 14}}
                    item={item}
                    playingUuid={props.playingUuid}
                    updatePlayingUuid={props.updatePlayingUuid}
                 />
        })
      }
    </View>
  )
}

export default GridCardListComponent;