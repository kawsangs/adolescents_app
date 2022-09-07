import React from 'react';
import {useTranslation} from 'react-i18next';

import RadioButtonComponent from '../shared/RadioButtonComponent';
import CheckboxComponent from '../shared/CheckboxComponent';
import provinces from '../../db/json/provinces';
import characteristics from '../../db/json/characteristics';

const CreateAccountSelectionsComponent = (props) => {
  const {t} = useTranslation();
  const sectionMarginTop = 22
  return <React.Fragment>
            <RadioButtonComponent items={provinces} title={t('yourLocation')} style={{marginTop: sectionMarginTop}}
              selectedValue={props.province}
              required={true}
              mutipleSelection={false}
              updateValue={(province) => props.updateState('province', province)}
            />
            <CheckboxComponent items={characteristics} title={t('yourCharacteristic')}
              selectedItems={props.characteristics}
              style={{marginTop: sectionMarginTop}}
              updateSelectedItems={(characteristics) => props.updateState('characteristics', characteristics)}
            />
        </React.Fragment>
}

export default CreateAccountSelectionsComponent;