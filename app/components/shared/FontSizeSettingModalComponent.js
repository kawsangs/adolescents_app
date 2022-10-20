import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Modal, Portal, Text} from 'react-native-paper';
import {Slider} from '@miblanchard/react-native-slider';
import {useTranslation} from 'react-i18next';

import color from '../../themes/color';
import {cardBorderRadius} from '../../constants/component_constant';
import {largeFontSize, xLargeFontSize, xxLargeFontSize} from '../../utils/font_size_util';
import asyncStorageService from '../../services/async_storage_service';
import {TEXT_SIZE} from '../../constants/async_storage_constant';

const FontSizeSettingModalComponent = (props) => {
  const {t} = useTranslation();
  const [textSize, setTextSize] = useState(props.textSize || xLargeFontSize());
  useEffect(() => {
    if (textSize != props.textSize)
      setTextSize(props.textSize)
  }, [props.textSize]);

  const activeText = (value) => {
    let size = textSize || props.textSize;

    return value == size ? styles.activeSize : {} ;
  }

  const onTextSizeChange = (textSize) => {
    setTextSize(textSize);
    props.updateTextSize(textSize);
    asyncStorageService.setItem(TEXT_SIZE, textSize);
  }

  const renderSlider = () => {
    return (
      <View style={{paddingHorizontal: 8}}>
        <View style={styles.letterAWrapper} >
          <Text style={[styles.textSize, {fontSize: largeFontSize()}, activeText(largeFontSize())]}>ក</Text>
          <Text style={[styles.textSize, {fontSize: xLargeFontSize()}, activeText(xLargeFontSize())]}>ក</Text>
          <Text style={[styles.textSize, {fontSize: xxLargeFontSize()}, activeText(xxLargeFontSize())]}>ក</Text>
        </View>

        <Slider
          step={2}
          maximumValue={xxLargeFontSize()}
          minimumValue={largeFontSize()}
          onValueChange={(textSize) => onTextSizeChange(textSize)}
          value={textSize || props.textSize}
          thumbStyle={{width: 12, height: 12, backgroundColor: color.primaryColor}}
          minimumTrackTintColor={color.primaryColor}
        />
      </View>
    )
  }

  const renderSampleText = () => {
    return <View style={{height: 30, marginTop: 8, borderWidth: 0}}>
              <Text style={{textAlign: 'center', fontSize: parseFloat(textSize), color: color.blackColor}}>{t('sampleTextSize')}</Text>
           </View>
  }

  return (
    <Portal>
      <Modal visible={props.visible} onDismiss={props.onDismiss} contentContainerStyle={styles.container}>
        <Text style={{fontSize: largeFontSize(), color: color.blackColor}}>{t('textSize')}</Text>
        {renderSampleText()}
        {renderSlider()}
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: cardBorderRadius,
    padding: 16,
    width: '88%',
  },
  letterAWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 16
  },
  textSize: {
    color: color.lightGrayColor,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  activeSize: {
    color: color.lightBlackColor,
  }
})

export default FontSizeSettingModalComponent;