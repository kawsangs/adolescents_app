import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withTranslation } from 'react-i18next';
import hoistStatics from 'hoist-non-react-statics';
import IonIcon from 'react-native-vector-icons/Ionicons';

import PlayAudioComponent from '../PlayAudioComponent';
import color from '../../../themes/color';
import { getStyleOfDevice } from '../../../utils/responsive_util';
import BottomSheetPickerTabletStyles from '../../../assets/stylesheets/tablet/bottomSheetPickerComponentStyles';
import BottomSheetPickerMobileStyles from '../../../assets/stylesheets/mobile/bottomSheetPickerComponentStyles';

const styles = getStyleOfDevice(BottomSheetPickerTabletStyles, BottomSheetPickerMobileStyles);

class BottomSheetPickerListItem extends React.Component {
  renderAudioBtn() {
    return <PlayAudioComponent
              iconSize={24}
              audio={this.props.audio}
              btnStyle={{borderWidth: 0, borderRadius: 0}}
              itemUuid={this.props.uuid}
              playingUuid={this.props.playingUuid}
              isSpeakerIcon={true}
              updatePlayingUuid={this.props.updatePlayingUuid}
            >
              <IonIcon/>
            </PlayAudioComponent>
  }

  renderListItem() {
    return this.props.items.map((item, index) => {
      return (
        <React.Fragment>
          <TouchableOpacity key={index}
            onPress={() => this.props.onSelectItem(item)}
            style={[styles.itemContainer]}
          >
            { this.props.customListItem ? this.props.customListItem(item)
              :
              <View style={{flex: 1}}>
                <Text style={[styles.itemTitle, { color: this.itemColor(item, color.blackColor) }]}>{ item[`name_${this.props.i18n.language}`] }</Text>
              </View>
            }
            {this.renderAudioBtn()}
          </TouchableOpacity>
          <View style={{ borderColor: color.lightGrayColor, borderBottomWidth: index == this.props.items.length - 1 ? 0 : 0.6 }} />
        </React.Fragment>
      )
    })
  }

  hasSelected(item) {
    return item.disabled || item.value === this.props.selectedItem;
  }

  itemColor(item, defaultColor) {
    return (item.disabled && item.value != this.props.selectedItem) ? color.disabledCardColor : defaultColor;
  }

  render() {
    return this.renderListItem();
  }
}

export default hoistStatics(withTranslation()(BottomSheetPickerListItem), BottomSheetPickerListItem);