import React from 'react';

import BottomSheetPickerComponent from '../shared/BottomSheetPickerComponent';
import BottomSheetPickerListComponent from '../shared/bottomSheetPicker/BottomSheetPickerListComponent';
import {defaultPickerContentHeight} from '../../constants/modal_constant';

const PickerComponent = (props) => {
  const onSelectItem = (selectedItem) => {
    props.updateSelectedItem(selectedItem);
    props.pickerModalRef.current?.dismiss();
  }

  const showPicker = () => {
    props.pickerRef.current?.setBodyContent(
      <BottomSheetPickerListComponent
        ref={props.pickerContentRef}
        title={props.bottomSheetTitle}
        isRequire={true}
        items={props.items}
        selectedItem={props.selectedItem}
        contentHeight={defaultPickerContentHeight}
        onSelectItem={(selectedItem) => onSelectItem(selectedItem)}
        playingUuid={props.playingUuid}
        updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
      />
    );

    props.pickerModalRef.current?.present();
  }

  return <BottomSheetPickerComponent
            uuid={props.uuid}
            title={props.title}
            label={!!props.selectedItem ? props.selectedItem.label : props.placeholder}
            items={props.items}
            selectedItem={props.selectedItem}
            required={props.required}
            disabled={props.disabled}
            customContainerStyle={{ marginTop: 19 }}
            audio={props.audio}
            playingUuid={props.playingUuid}
            showPicker={() => showPicker()}
            updatePlayingUuid={(uuid) => props.updatePlayingUuid(uuid)}
            accessibilityLabel={props.accessibilityLabel}
            placeholderContainerStyle={props.placeholderContainerStyle}
          />
}

export default PickerComponent;