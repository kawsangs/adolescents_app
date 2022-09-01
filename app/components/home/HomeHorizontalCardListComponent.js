import React from 'react';
import HorizontalCardComponent from '../shared/HorizontalCardComponent';
import uuidv4 from '../../utils/uuidv4_util';

import safetyAudio from '../../assets/audios/safety_plan.mp3';
import yourStoryAudio from '../../assets/audios/your_story_long.mp3';

const items = [
  {
    uuid: uuidv4(), title: "សេវាសុខភាពបន្តពូជ", points: 10, image: require('../../assets/images/intro_1.jpg'),
    audio: safetyAudio
  },
  {
    uuid: uuidv4(), title: "ការអប់រំពីសុខភាពផ្លូវចិត្ត និងសុខភាពផ្លូវភេទ", points: 7, image: require('../../assets/images/intro_1.jpg'),
    audio: yourStoryAudio
  },
]

const HomeHorizontalCardListComponent = (props) => {
  return (
    <React.Fragment>
      { items.map((item, index) => {
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