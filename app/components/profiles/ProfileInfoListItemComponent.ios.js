import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import {descriptionFontSize} from '../../constants/component_constant';

const ProfileInfoListItem = (props) => {
  const {info, gender, playingUuid} = props;
  return <View style={[styles.container, props.containerStyle]}>
            <Text style={{flex: 6, fontSize: descriptionFontSize}}>{info.label}</Text>
            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              {props.hasIcon && <Icon name={gender.icon} size={30} style={{marginRight: 8}} />}
              <Text style={{fontSize: descriptionFontSize, fontWeight: 'bold'}}>{info.value}</Text>
            </View>
            <View style={{flex: 2, alignItems: 'center'}}>
              { !!info.audio &&
                <CustomAudioPlayerButtonComponent
                  audio={info.audio}
                  itemUuid={info.uuid}
                  playingUuid={playingUuid}
                  updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
                  buttonStyle={{borderRadius: 0}}
                />
              }
            </View>
          </View>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 6
  }
})

export default ProfileInfoListItem;