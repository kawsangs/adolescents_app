import React from 'react';
import ScrollViewWithAudioComponent from '../../components/shared/ScrollViewWithAudioComponent';
import Category from '../../models/Category';

const LeafCategoryDetailView = ({route, navigation}) => {
  const category = Category.findById(route.params.id)

  return (
    <ScrollViewWithAudioComponent
      uuid={route.params.id}
      title={category.name}
      description={category.description}
      audio={category.audioSource}
      image={category.imageSource}
      sources={category.sources}
      tagList={category.tag_list}
      defaultTextSize={route.params.textSize}
    />
  )
}

export default LeafCategoryDetailView;