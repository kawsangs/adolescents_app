import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/profileInfoListItemComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/profileInfoListItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const ProfileInfoListItem = (props) => {
  const {info, gender, playingUuid} = props;
  return <View style={[styles.container, props.containerStyle]}>
            <View style={styles.infoWrapper}>
              <Text style={styles.label}>{props.label || info.label}</Text>
              <View style={styles.valueWrapper}>
                {props.hasIcon && <Icon name={gender.icon} size={30} style={{marginRight: 8}} color={color.lightBlackColor} />}
                <Text style={styles.valueLabel}>{props.value || info.value}</Text>
              </View>
            </View>
            <View style={styles.audioWrapper}>
              { !!info.audio &&
                <CustomAudioPlayerButtonComponent
                  audio={info.audio}
                  itemUuid={info.uuid}
                  playingUuid={playingUuid}
                  updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                />
              }
            </View>
         </View>
}

export default ProfileInfoListItem;