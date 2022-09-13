import React from 'react';
import HorizontalCardComponent from '../shared/HorizontalCardComponent';

import Category from '../../models/Category';
import {GUI_CARD} from '../../constants/card_constant';

const HomeHorizontalCardListComponent = (props) => {
  const categories = Category.findByDisplayType(GUI_CARD);

  return (
    <React.Fragment>
      { categories.map((item, index) => {
          return <HorizontalCardComponent key={index}
                    item={item}
                    containerStyle={{marginTop: 32}}
                    playingUuid={props.playingUuid}
                    updatePlayingUuid={props.updatePlayingUuid}
                 />
        })
      }
    </React.Fragment>
  )
}

export default HomeHorizontalCardListComponent;