import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {Text} from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import PlayAudioComponent from './PlayAudioComponent';
import TextComponent from './TextComponent';
import color from '../../themes/color';
import { getStyleOfDevice } from '../../utils/responsive_util';
import componentUtil from '../../utils/component_util';
import BottomSheetPickerTabletStyles from '../../assets/stylesheets/tablet/bottomSheetPickerComponentStyles';
import BottomSheetPickerMobileStyles from '../../assets/stylesheets/mobile/bottomSheetPickerComponentStyles';

const styles = getStyleOfDevice(BottomSheetPickerTabletStyles, BottomSheetPickerMobileStyles);

class BottomSheetPickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.formModalRef = React.createRef();
  }

  getLabel() {
    if (!this.props.items)
      return this.props.label || '';

    const selectedItem = this.props.items.filter(item => item.value === this.props.selectedItem);
    return selectedItem.length > 0 ? selectedItem[0].label : this.props.label;
  }

  showPicker() {
    if (this.props.disabled)
      return

    this.props.showPicker()
  }

  renderAudioButton() {
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

  render() {
    return (
      <View style={this.props.customContainerStyle}>
        <TextComponent label={this.props.title} required={this.props.required} requiredColor={color.blackColor} style={styles.titleLabel} />

        <View style={styles.mainContainer}>
          <TouchableOpacity onPress={() => this.showPicker()} style={{height: componentUtil.mediumPressableItemSize()}}>
            <View style={styles.textContainer}>
              {this.renderAudioButton()}
              <View style={{flex: 1}}>
                <Text style={styles.itemTitle}>{ this.getLabel() }</Text>
              </View>
              <FeatherIcon name="chevron-right" color={color.primaryColor} size={24} style={{marginRight: 10}} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default BottomSheetPickerComponent;

// How to call BottomSheetPickerComponent
{/* <BottomSheetPickerComponent
  title="Facilitator 1"
  label="Select facilitator"
  selectedItem={1}
  showPicker={() => {}}
/> */}