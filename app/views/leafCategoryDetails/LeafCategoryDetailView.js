import React from 'react';
import ScrollViewWithAudioComponent from '../../components/shared/ScrollViewWithAudioComponent';
import Category from '../../models/Category';

const LeafCategoryDetailView = ({route, navigation}) => {
  const category = Category.findByUuid(route.params.uuid)

  return (
    <ScrollViewWithAudioComponent
      title={category.name}
      description={category.description}
      audio={category.audio_url}
      image={category.image_url}
    />
  )
}

export default LeafCategoryDetailView;