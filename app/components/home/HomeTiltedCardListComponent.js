import React from 'react';
import {View} from 'react-native';

import TiltedCardComponent from '../shared/TiltedCardComponent';
import uuidv4 from '../../utils/uuidv4_util';
import safetyAudio from '../../assets/audios/safety_plan.mp3';
import yourStoryAudio from '../../assets/audios/your_story_long.mp3';
import yourStoryMiniAudio from '../../assets/audios/your_story.mp3';

const items = [
  {
    uuid: uuidv4(), title: "ការយល់ដឹងពីយេនឌ័រ", points: 5, image: require('../../assets/images/img_no_background.png'),
    audio: safetyAudio
  },
  {
    uuid: uuidv4(), title: "គ្លីនិចសុខភាពនិងសេវារំលូត", points: 7, image: require('../../assets/images/img_no_background.png'),
    audio: yourStoryAudio
  },
  {
    uuid: uuidv4(), title: "សេវាគាំទ្រផ្លូវចិត្តនិងចិត្តសង្គម", points: 5, image: require('../../assets/images/img_no_background.png'),
    audio: yourStoryMiniAudio
  },
  {
    uuid: uuidv4(), title: "ការកំសាន្ត (វីដេអូអប់រំ)", points: 7, image: require('../../assets/images/img_no_background.png'),
    audio: null
  },
]

const HomeTiltedCardListComponent = (props) => {

  return (
    <View style={{marginTop: 32, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      { items.map((item, index) => {
          return <TiltedCardComponent key={index}
                    item={item}
                    containerStyle={{marginTop: 28, marginBottom: 16}}
                    playingUuid={props.playingUuid}
                    updatePlayingUuid={props.updatePlayingUuid}
                 />
        })
      }
    </View>
  )
}

export default HomeTiltedCardListComponent;