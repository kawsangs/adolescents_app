import React from 'react';
import { decompressFromUTF16 } from 'lz-string';
import ScrollViewWithAudioComponent from '../../components/shared/ScrollViewWithAudioComponent';
import Category from '../../models/Category';

const LeafCategoryDetailView = ({route, navigation}) => {
  const category = Category.findById(route.params.id)

  return (
    <ScrollViewWithAudioComponent
      uuid={route.params.id}
      title={category.name}
      description={!!category.description ? decompressFromUTF16(category.description) : null}
      audio={category.audioSource}
      image={category.imageSource}
      sources={category.sources}
      tagList={category.tag_list}
      defaultTextSize={route.params.textSize}
    />
  )
}

export default LeafCategoryDetailView;