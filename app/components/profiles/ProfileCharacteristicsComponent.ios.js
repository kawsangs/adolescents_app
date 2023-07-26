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
  renderItems = () => {
    return User.currentLoggedIn().characteristics.map(characteristic => {
      const characObj = profileHelper.getCharacteristic(characteristic)
      return (<View key={characObj.uuid} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
                <View style={styles.infoWrapper}>
                  <Text style={[{marginLeft: 20}, styles.valueLabel]}>{characObj.name_km}</Text>
                </View>
                <View style={styles.audioWrapper}>
                  <CustomAudioPlayerButtonComponent
                    audio={characObj.audio}
                    itemUuid={characObj.uuid}
                    playingUuid={props.playingUuid}
                    updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                  />
                </View>
              </View>
            )
    })
  }

  return <React.Fragment>
            <Text style={{fontSize: descriptionFontSize, marginBottom: 6, marginTop: getStyleOfDevice(10, 18)}}>ស្ថានភាពរស់នៅ</Text>
            {renderItems()}
          </React.Fragment>
}

export default ProfileCharacteristicsComponent;