import React from 'react';
import {View, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import TopicDetailDescriptionComponent from './TopicDetailDescriptionComponent';
import FacilityCardItemComponent from '../facilities/FacilityCardItemComponent';
import {screenHorizontalPadding, scrollViewPaddingBottom} from '../../constants/component_constant';
import topicHelper from '../../helpers/topic_helper';

const TopicDetailMainComponent = (props) => {
  const {t} = useTranslation();
  const [facilities] = React.useState(topicHelper.getFacilitiesByTopic(props.topicUuid));
  const [playingUuid, setPlayingUuid] = React.useState(null);

  const renderFacilities = () => {
    return facilities.map((facility, index) => {
      return <FacilityCardItemComponent key={index} facility={facility}
                playingUuid={playingUuid}
                updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
                containerStyle={{width: Dimensions.get('screen').width - 32}}
             />
    });
  }

  return (
    <React.Fragment>
      <View style={{paddingTop: 16, paddingHorizontal: screenHorizontalPadding, paddingBottom: scrollViewPaddingBottom}}>
        <TopicDetailDescriptionComponent uuid={props.uuid} type={props.type} textSize={props.textSize} />
        { facilities.length > 0 && <Text style={{marginTop: 20, marginBottom: 0, color: 'white', fontSize: 16}}>{t('recommendedServiceProvider')}</Text>}
        { renderFacilities() }
      </View>
    </React.Fragment>
  )
}

export default TopicDetailMainComponent;