import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import CardWithSoundWaveComponent from './CardWithSoundWaveComponent';

const CardWithSoundWaveListComponent = (props) => {
  const [playingId, setPlayingId] = useState(null);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      {
        props.items.map((item, index) => {
          return <CardWithSoundWaveComponent
                    key={index}
                    item={item}
                    playingId={playingId}
                    updatePlayingId={(id) => setPlayingId(id)}
                 />
        })
      }
    </ScrollView>
  )
}

export default CardWithSoundWaveListComponent;