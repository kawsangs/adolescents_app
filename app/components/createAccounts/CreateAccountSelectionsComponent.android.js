import React from 'react';
import {useTranslation} from 'react-i18next';

import CheckboxComponent from '../shared/CheckboxComponent';
import BottomSheetPickerComponent from '../shared/BottomSheetPickerComponent';
import BottomSheetPickerListComponent from '../shared/bottomSheetPicker/BottomSheetPickerListComponent';

import provinces from '../../db/json/provinces';
import characteristics from '../../db/json/characteristics';
import {provincePickerContentHeight} from '../../constants/modal_constant';

const CreateAccountSelectionsComponent = (props) => {
  const {t, i18n} = useTranslation();
  const sectionMarginTop = 22

  const showPicker = () => {
    props.pickerRef.current?.setBodyContent(
      <BottomSheetPickerListComponent
        ref={props.pickerContentRef}
        title={t('yourProvince')}
        isRequire={true}
        items={provinces}
        selectedItem={props.province}
        contentHeight={provincePickerContentHeight}
        hasSearchBox={true}
        onSearchBoxFocus={() => props.pickerModalRef.current?.expand()}
        onSelectItem={(province) => props.updateState('province', province)}
      />
    );

    props.pickerModalRef.current?.present();
  }

  const renderBottomSheetPicker = () => {
    const label = !!props.province ? props.province[`name_${i18n.language}`] : t('selectYourProvince');

    return <BottomSheetPickerComponent
              title={t('yourProvince')}
              label={label}
              items={provinces}
              selectedItem={props.province}
              showSubtitle={false}
              required={true}
              customContainerStyle={{ marginTop: 19 }}
              showPicker={() => showPicker()}
            />
  }

  return <React.Fragment>
            { renderBottomSheetPicker() }
            <CheckboxComponent items={characteristics} title={t('yourCharacteristic')}
              selectedItems={props.characteristics}
              style={{marginTop: sectionMarginTop}}
              updateSelectedItems={(characteristics) => props.updateState('characteristics', characteristics)}
            />
        </React.Fragment>
}

export default CreateAccountSelectionsComponent;