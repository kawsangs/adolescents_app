import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import CustomBottomSheetPickerComponent from '../shared/CustomBottomSheetPickerComponent';
import color from '../../themes/color';
import userHelper from '../../helpers/user_helper';
import {getStyleOfDevice, isShortScreenDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/profileInfoListItemComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/profileInfoListItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const ProfileInfoOccupationItemComponent = (props) => {
  const {t, i18n} = useTranslation();
  const {info, gender, playingUuid} = props;

  const renderCustomPicker = () => {
    return <View style={{flexDirection: 'row', alignItems: 'center', height: 48}}>
              <Text style={[styles.valueLabel, {color: color.primaryColor, marginRight: 4}]}>
                { !info.value ? 'ជ្រើសរើសមុខរបររបស់អ្នក' : info.value }
              </Text>
              <Icon name='pencil-outline' size={22} color={color.primaryColor} />
           </View>
  }

  const renderOccupationPicker = () => {
    return <CustomBottomSheetPickerComponent
              bottomSheetTitle={t('yourOccupaton')}
              items={userHelper.getOccupationDataset(i18n.language)}
              selectedItem={props.value}
              onSelectItem={(item) => props.updateOccupation(item)}
              pickerUuid='user-occupation-picker'
              placeholderAudio={null}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={[styles.valueWrapper, {flex: 10}]}
              snapPoints={isShortScreenDevice() ? ['66%'] : ['58%']}
              pickerContentHeight={isShortScreenDevice() ? 408 : 410}
              customPicker={renderCustomPicker()}
           />
  }

  const renderOccupation = () => {
    return <React.Fragment>
              <View style={styles.infoWrapper}>
                <Text style={styles.label}>{info.label}</Text>
                {renderOccupationPicker()}
              </View>
            </React.Fragment>
  }

  const renderContent = () => {
    if (props.loggedInUser.occupation == 'n_a')
      return renderOccupation();

    return <React.Fragment>
            <View style={styles.infoWrapper}>
              <Text style={styles.label}>{info.label}</Text>
              <View style={styles.valueWrapper}>
                {props.hasIcon && <Icon name={gender.icon} size={30} style={{marginRight: 8}} color={color.lightBlackColor} />}
                <Text style={styles.valueLabel}>{info.value}</Text>
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
          </React.Fragment>
  }


  return <View style={[styles.container, props.containerStyle]}>
            {renderContent()}
         </View>
}

export default ProfileInfoOccupationItemComponent;