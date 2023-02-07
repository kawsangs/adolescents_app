import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import {descriptionFontSize} from '../../constants/component_constant';
import profileHelper from '../../helpers/profile_helper';
import User from '../../models/User';

const ProfileCharacteristicsComponent = (props) => {
  let characteristics = [];
    User.currentLoggedIn().characteristics.map((characteristic, index) => {
      const charac = profileHelper.getCharacteristic(characteristic)
      characteristics.push(<View key={charac.value} style={{flexDirection: 'row', marginLeft: 20, alignItems: 'center', borderWidth: 0}}>
                              <Text style={{fontSize: descriptionFontSize, fontWeight: 'bold', flex: 1}}>{charac.name_km}</Text>
                              <CustomAudioPlayerButtonComponent
                                audio={charac.audio}
                                itemUuid={charac.value}
                                playingUuid={props.playingUuid}
                                updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                                buttonStyle={{borderRadius: 0, borderWidth: 0, height: 52}}
                              />
                           </View>
                          )
    })

    return <React.Fragment>
              <Text style={{fontSize: descriptionFontSize, marginBottom: 6}}>ស្ថានភាពរស់នៅ</Text>
              {characteristics}
           </React.Fragment>
}

export default ProfileCharacteristicsComponent;