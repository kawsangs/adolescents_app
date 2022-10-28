import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import TopicDetailDescriptionComponent from './TopicDetailDescriptionComponent';
import FacilityHorizontalListComponent from '../shared/FacilityHorizontalListComponent';

import {screenHorizontalPadding} from '../../constants/component_constant';
import topicHelper from '../../helpers/topic_helper';

const TopicDetailMainComponent = (props) => {
  const {t} = useTranslation();
  const [facilities] = React.useState(topicHelper.getFacilitiesByTopic(props.topicUuid));
  const [playingUuid, setPlayingUuid] = React.useState(null);

  return (
    <React.Fragment>
      <View style={{paddingTop: 16, paddingHorizontal: screenHorizontalPadding}}>
        <TopicDetailDescriptionComponent uuid={props.uuid} type={props.type} />
        { facilities.length > 0 && <Text style={{marginTop: 20, marginBottom: 8, color: 'white', fontSize: 16}}>{t('recommendedServiceProvider')}</Text>}
      </View>
      <FacilityHorizontalListComponent
        facilities={facilities}
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
      />
    </React.Fragment>
  )
}

export default TopicDetailMainComponent;