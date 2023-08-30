import React from 'react';
import {View} from 'react-native';

import MentalSupportCardComponent from './MentalSupportCardComponent';
import {mentalSupportContacts} from '../../constants/mental_support_constant';

const MentalSupportCardListComponent = () => {
  const renderList = () => {
    return mentalSupportContacts.map((mentalSupport, index) => {
      return <MentalSupportCardComponent key={`mental-${index}`} name={mentalSupport.name} intend={mentalSupport.intend}
                channel={mentalSupport.channel}
                errorMessage={mentalSupport.errorMessage}
            />
    });
  }

  return (
    <View style={{marginTop: 8, height: '100%'}}>
      {renderList()}
    </View>
  )
}

export default MentalSupportCardListComponent;