import React, {useState} from 'react';
import {Image, View} from 'react-native';

import Category from '../../models/Category';
import CardWithSoundWaveComponent from '../shared/CardWithSoundWaveComponent';

const LeafCategoryCardListComponent = (props) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const categories = Category.getSubCategories(props.category.uuid);

  const renderImage = () => {
    return (
      <Image source={props.category.image_url}
        resizeMode='contain'
        style={{width: '100%', height: 200}}
      />
    )
  }

  const renderList = () => {
    return categories.map((item, index) => {
      return <CardWithSoundWaveComponent
                key={index}
                item={item}
                playingUuid={playingUuid}
                updatePlayingUuid={(id) => setPlayingUuid(id)}
              />
    })
  }

  return (
    <React.Fragment>
      {renderImage()}
      {renderList()}
    </React.Fragment>
  )
}

export default LeafCategoryCardListComponent;