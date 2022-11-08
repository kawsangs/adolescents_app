import React from 'react';

import GradientScrollViewComponent from '../../components/shared/GradientScrollViewComponent';
import NavigationHeaderWithBackButtonComponent from '../../components/shared/NavigationHeaderWithBackButtonComponent';
import TopicDetailMainComponent from '../../components/topicDetails/TopicDetailMainComponent';

const TopicDetailView = (props) => {
  return (
    <GradientScrollViewComponent
      header={<NavigationHeaderWithBackButtonComponent label={props.route.params.name} />}
      body={<TopicDetailMainComponent uuid={props.route.params.uuid} topicUuid={props.route.params.topic_uuid} type={props.route.params.type} />}
      scrollViewStyle={{paddingHorizontal: 0}}
    />
  )
}

export default TopicDetailView;