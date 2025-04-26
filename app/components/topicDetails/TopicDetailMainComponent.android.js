import React from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import TopicDetailDescriptionComponent from './TopicDetailDescriptionComponent';
import FacilityCardItemComponent from '../facilities/FacilityCardItemComponent';
import BoldLabelComponent from '../shared/BoldLabelComponent';
import {screenHorizontalPadding} from '../../constants/component_constant';
import topicHelper from '../../helpers/topic_helper';
import {descriptionFontSize} from '../../utils/font_size_util';

const TopicDetailMainComponent = (props) => {
  const {t} = useTranslation();
  const [facilities] = React.useState(topicHelper.getFacilitiesByTopic(props.topicUuid));
  const [playingUuid, setPlayingUuid] = React.useState(null);

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
             />
    });
  }

  return (
    <View style={{marginTop: 6, paddingBottom: 32, paddingHorizontal: screenHorizontalPadding + 8, height: '100%', backgroundColor: 'white'}}>
      <TopicDetailDescriptionComponent uuid={props.uuid} type={props.type} textSize={props.textSize} />
      { facilities.length > 0 && <BoldLabelComponent label={`${t('recommendedServiceProvider')}:`} style={{fontSize: descriptionFontSize(), marginTop: 10}} />}
      { renderFacilities() }
    </View>
  )
}

export default TopicDetailMainComponent;