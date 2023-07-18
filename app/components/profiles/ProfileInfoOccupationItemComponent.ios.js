import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import CustomBottomSheetPickerComponent from '../shared/CustomBottomSheetPickerComponent';
import NoticeBadgeComponent from '../shared/NoticeBadgeComponent';
import color from '../../themes/color';
import userHelper from '../../helpers/user_helper';
import {iosOccupationContentHeight, iosOccupationSnapPoints} from '../../constants/modal_constant';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/profileInfoListItemComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/profileInfoListItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const ProfileInfoOccupationItemComponent = (props) => {
  const {t, i18n} = useTranslation();
  const {info, gender, playingUuid} = props;

  const renderCustomPicker = () => {
    return <View style={{flexDirection: 'row', alignItems: 'center', height: '100%', marginTop: -1}}>
              { !info.value && <NoticeBadgeComponent style={{position: 'relative', width: 16, height: 16, marginRight: 6}} disableFixPosition={true}/> }
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
              selectedItem={props.selectedValue}
              onSelectItem={(item) => props.updateOccupation(item)}
              pickerUuid='user-occupation-picker'
              placeholderAudio={null}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={[styles.valueWrapper, {flex: 8}]}
              snapPoints={iosOccupationSnapPoints}
              pickerContentHeight={iosOccupationContentHeight}
              customPicker={renderCustomPicker()}
              showSubtitle={true}
           />
  }

  const renderOccupation = () => {
    return <React.Fragment>
              <View style={styles.infoWrapper}>
                <Text style={[styles.label, {flex: 3}]}>មុខរបរ</Text>
                {renderOccupationPicker()}
              </View>
            </React.Fragment>
  }

  const renderContent = () => {
    if (props.loggedInUser.occupation == 'n_a')
      return renderOccupation();

    return <React.Fragment>
            <View style={styles.infoWrapper}>
              <Text style={[styles.label, {flex: 3}]}>មុខរបរ</Text>
              <View style={[styles.valueWrapper, {flex: 8}]}>
                {props.hasIcon && <Icon name={gender.icon} size={30} style={{marginRight: 8}} color={color.lightBlackColor} />}
                <Text style={styles.valueLabel}>{info.value}</Text>
              </View>
            </View>
            <View style={styles.audioWrapper}>
              { !!info.audio &&
                <CustomAudioPlayerButtonComponent
                  audio={info.audio}
                  itemUuid='user-occupation'
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