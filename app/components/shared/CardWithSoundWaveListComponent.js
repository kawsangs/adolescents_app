import React, { useState } from 'react';
import {ScrollView} from 'react-native';

import CardWithSoundWaveComponent from './CardWithSoundWaveComponent';

// This component is for rendering a list of cards with a sound wave component.
// It has palyingId as a state to prevent the audio from playing overlap each other

const CardWithSoundWaveListComponent = (props) => {
  const [playingUuid, setPlayingUuid] = useState(null);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {
        props.items.map((item, index) => {
          return <CardWithSoundWaveComponent
                    key={index}
                    item={item}
                    playingUuid={playingUuid}
                    updatePlayingUuid={(id) => setPlayingUuid(id)}
                 />
        })
      }
    </ScrollView>
  )
}

export default CardWithSoundWaveListComponent;