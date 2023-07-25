import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomAudioPlayerButtonComponent from '../shared/CustomAudioPlayerButtonComponent';
import CustomBottomSheetPickerComponent from '../shared/CustomBottomSheetPickerComponent';
import NoticeBadgeComponent from '../shared/NoticeBadgeComponent';
import color from '../../themes/color';
import {getStyleOfDevice} from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/profileInfoListItemComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/profileInfoListItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const ProfileInfoItemWithPickerComponent = (props) => {
  const {info, playingUuid} = props;

  const renderPickerLabel = () => {
    return <View style={[{flexDirection: 'row', alignItems: 'center', height: '100%'}, !props.disabled && {marginTop: -2}]}>
              {!info.value && <NoticeBadgeComponent style={{position: 'relative', width: 16, height: 16, marginRight: 6}} disableFixPosition={true}/>}
              <Text style={[styles.valueLabel, {color: props.disabled ? color.disabledColor : color.primaryColor, marginRight: 4}]}>
                { !info.value ? props.pickerLabel : info.value }
              </Text>
              <Icon name='pencil-outline' size={22} color={props.disabled ? color.disabledColor : color.primaryColor} />
           </View>
  }

  const renderCustomPicker = () => {
    return <CustomBottomSheetPickerComponent
              bottomSheetTitle={props.bottomSheetTitle}
              items={props.items}
              selectedItem={props.selectedValue}
              onSelectItem={(item) => props.updateSelectedItem(item)}
              pickerUuid={props.uuid}
              placeholderAudio={props.placeholderAudio}
              playingUuid={playingUuid}
              updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
              containerStyle={[styles.valueWrapper, {flex: 8}]}
              snapPoints={props.snapPoints}
              pickerContentHeight={props.contentHeight}
              customPicker={renderPickerLabel()}
              showSubtitle={true}
              itemTextStyle={{marginTop: -4}}
              listItemStyle={{paddingTop: 0}}
           />
  }

  const renderPicker = () => {
    return <React.Fragment>
              <View style={[styles.infoWrapper, {paddingTop: 0, height: 56}]}>
                <Text style={[styles.label, {flex: 3}]}>{props.label}</Text>
                { props.disabled ? <View style={[styles.valueWrapper, {flex: 8}]}>{renderPickerLabel()}</View>
                  : renderCustomPicker()
                }
              </View>
            </React.Fragment>
  }

  const renderContent = () => {
    if (props.isPickerVisible)
      return renderPicker();

    return <React.Fragment>
            <View style={styles.infoWrapper}>
              <Text style={[styles.label, {flex: 3}]}>{props.label}</Text>
              <View style={[styles.valueWrapper, {flex: 8}]}>
                <Text style={styles.valueLabel}>{info.value}</Text>
              </View>
            </View>
            <View style={styles.audioWrapper}>
              { !!info.audio &&
                <CustomAudioPlayerButtonComponent
                  audio={info.audio}
                  itemUuid={props.uuid}
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

export default ProfileInfoItemWithPickerComponent;