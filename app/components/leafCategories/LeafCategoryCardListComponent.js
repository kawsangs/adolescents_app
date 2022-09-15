import React, {useState} from 'react';
import {Image} from 'react-native';

import Category from '../../models/Category';
import CardWithSoundWaveComponent from '../shared/CardWithSoundWaveComponent';

const LeafCategoryCardListComponent = (props) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const categories = Category.getSubCategories(props.category.uuid);

  const renderList = () => {
    return categories.map((category, index) => {
      return <CardWithSoundWaveComponent
                key={index}
                item={category}
                playingUuid={playingUuid}
                updatePlayingUuid={(id) => setPlayingUuid(id)}
              />
    })
  }

  return (
    <React.Fragment>
      <Image source={props.category.imageSource} resizeMode='contain' style={{width: '100%', height: 200}} />
      {renderList()}
    </React.Fragment>
  )
}

export default LeafCategoryCardListComponent;