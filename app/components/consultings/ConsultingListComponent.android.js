import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import ConsultingCardItemComponent from './ConsultingCardItemComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';

import safetyPlan from '../../assets/audios/safety_plan.mp3';
import longStory from '../../assets/audios/your_story_long.mp3';

const ConsultingListComponent = (props) => {
  const [playingUuid, setPlayingUuid] = useState(null);
  const consultings = [
    { name: "សុខភាពបន្តពូជ", uuid: "consult_01", audio: safetyPlan },
    { name: "មានផ្ទៃពោះដោយមិនបានព្រាងទុក", uuid: "consult_02", audio: longStory },
    { name: "ជំងឺកាមរោគ", uuid: "consult_03", audio: safetyPlan },
    { name: "ពិបាកមានកូន", uuid: "consult_04", audio: longStory },
    { name: "ត្រៀមយកកូន", uuid: "consult_05", audio: null },
    { name: "សុខភាពផ្លូវចិត្ត", uuid: "consult_05", audio: null },
    { name: "ចំណីអាហារ", uuid: "consult_05", audio: null },
  ]

  useEffect(() => {
    // Todo: if tab is changed clear the audio
    setPlayingUuid(null);
  }, [props.activeCategoryUuid])

  const renderList = () => {
    return consultings.map((item, index) => {
      return <ConsultingCardItemComponent key={`const_${index}`} uuid={item.uuid} name={item.name} index={index} audio={item.audio}
              playingUuid={playingUuid} updatePlayingUuid={(uuid) => setPlayingUuid(uuid)} />
    })
  }


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, paddingHorizontal: screenHorizontalPadding, paddingTop: screenHorizontalPadding, paddingBottom: 130}}>
      {renderList()}
    </ScrollView>
  )
}

export default ConsultingListComponent;