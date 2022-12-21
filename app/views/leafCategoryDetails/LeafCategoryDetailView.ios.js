import React from 'react';
import ScrollViewWithAudioComponent from '../../components/shared/ScrollViewWithAudioComponent';
import Category from '../../models/Category';

const LeafCategoryDetailView = ({route, navigation}) => {
  const category = Category.findByUuid(route.params.uuid)

  return (
    <ScrollViewWithAudioComponent
      uuid={route.params.uuid}
      title={category.name}
      description={category.description}
      audio={category.audioSource}
      image={category.imageSource}
      sources={category.sources}
      defaultTextSize={route.params.textSize}
    />
  )
}

export default LeafCategoryDetailView;