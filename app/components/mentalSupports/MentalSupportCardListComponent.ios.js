import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Snackbar} from 'react-native-paper';

import MentalSupportCardComponent from './MentalSupportCardComponent';
import {mentalSupportContacts} from '../../constants/mental_support_constant';
import color from '../../themes/color';

const MentalSupportCardListComponent = () => {
  const [state, setState] = useState({
    alertVisible: false,
    alertMessage: '',
  });

  const renderList = () => {
    return mentalSupportContacts.map((mentalSupport, index) => {
      return <MentalSupportCardComponent key={`mental-${index}`} name={mentalSupport.name} intend={mentalSupport.intend} channel={mentalSupport.channel}
                showAlertMessage={() => setState({ alertVisible: true, alertMessage: mentalSupport.errorMessage })}
             />
    });
  }

  return (
    <View style={{marginTop: 8, height: '100%'}}>
      {renderList()}

      <Snackbar
        visible={state.alertVisible}
        onDismiss={() => setState({ alertVisible: false, alertMessage: '' })}
        duration={2000}
        style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 10}}
      >
        <Text style={{color: color.whiteColor, lineHeight: 22}}>{ state.alertMessage }</Text>
      </Snackbar>
    </View>
  )
}

export default MentalSupportCardListComponent;