import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import {descriptionFontSize} from '../../constants/component_constant';
import profileHelper from '../../helpers/profile_helper';
import User from '../../models/User';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/profileInfoListItemComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/profileInfoListItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const ProfileCharacteristicsComponent = (props) => {
  let characteristics = [];
    User.currentLoggedIn().characteristics.map((characteristic, index) => {
      const charac = profileHelper.getCharacteristic(characteristic)
      characteristics.push(<View key={charac.value} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
                              <View style={styles.infoWrapper}>
                                <Text style={[{marginLeft: 20}, styles.valueLabel]}>{charac.name_km}</Text>
                              </View>
                              <View style={styles.audioWrapper}>
                                <CustomAudioPlayerButtonComponent
                                  audio={charac.audio}
                                  itemUuid={charac.value}
                                  playingUuid={props.playingUuid}
                                  updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                                />
                              </View>
                           </View>
                          )
    })

    return <React.Fragment>
              <Text style={{fontSize: descriptionFontSize, marginBottom: 6}}>ស្ថានភាពរស់នៅ</Text>
              {characteristics}
           </React.Fragment>
}

export default ProfileCharacteristicsComponent;