import React from 'react';
import {View} from 'react-native'
import { useSelector } from 'react-redux';

import ListViewCardComponent from '../shared/ListViewCardComponent';
import GridCardComponent from '../shared/GridCardComponent';

const SubCategoryItemsComponent = (props) => {
  const isGridView = useSelector(state => state.subCategoryDisplayMode.isGridView);
  const renderCard = (item, index) => {
    if (isGridView)
      return <GridCardComponent key={item.id}
              index={index}
              item={item}
              containerStyle={{marginTop: 14}}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
           />

    return <ListViewCardComponent
              key={item.id}
              item={item}
              index={index}
              playingUuid={props.playingUuid}
              updatePlayingUuid={props.updatePlayingUuid}
            />
  }

  return <View style={ isGridView ? { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'} : {}}>
            { props.items.map((item, index) => { return renderCard(item, index) }) }
         </View>
}

export default SubCategoryItemsComponent;