import React from 'react';
import { View, Image } from 'react-native';
import {Text} from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import BoldLabelComponent from '../shared/BoldLabelComponent';
import { getStyleOfDevice } from '../../utils/responsive_util';
import tabletStyles from '../../assets/stylesheets/tablet/introItemComponentStyles';
import mobileStyles from '../../assets/stylesheets/mobile/introItemComponentStyles';

const styles = getStyleOfDevice(tabletStyles, mobileStyles);

const IntroItemComponent = (props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.slide}>
      <Image source={props.image} style={styles.image} resizeMode='contain' />
      <View style={styles.labelContainer}>
        <BoldLabelComponent label={t(props.title)} style={styles.title} />
        <Text style={styles.label}>{t(props.description)}</Text>
      </View>
    </View>
  );
}

export default IntroItemComponent;