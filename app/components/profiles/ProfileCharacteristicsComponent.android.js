import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import {descriptionFontSize} from '../../constants/component_constant';
import profileHelper from '../../helpers/profile_helper';
import User from '../../models/User';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/profileInfoListItemComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/profileInfoListItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const ProfileCharacteristicsComponent = (props) => {
  const {t} = useTranslation();
  renderItems = () => {
    return User.currentLoggedIn().characteristics.map(characteristic => {
      const characObj = profileHelper.getCharacteristic(characteristic)
      return (<View key={characObj.uuid} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2, height: 48}}>
                <View style={styles.infoWrapper}>
                  <Text style={[{marginLeft: 20}, styles.valueLabel]}>{t(characObj.name)}</Text>
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
            <Text style={{fontSize: descriptionFontSize, marginBottom: 10, marginTop: 14}}>{t('characteristic')}</Text>
            {renderItems()}
          </React.Fragment>
}

export default ProfileCharacteristicsComponent;