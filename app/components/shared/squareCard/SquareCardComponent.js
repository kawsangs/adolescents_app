import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { useTranslation } from 'react-i18next';

import BoldLabelComponent from '../BoldLabelComponent';
import AudioButtonComponent from '../AudioButtonComponent';
import color from '../../../themes/color';
import {smallFontSize} from '../../../utils/font_size_util';
import {getStyleOfDevice} from '../../../utils/responsive_util';
import tabletStyles from '../../../assets/stylesheets/tablet/horizontalCardInfoComponentStyles';
import mobileStyles from '../../../assets/stylesheets/mobile/horizontalCardInfoComponentStyles';

const cardStyles = getStyleOfDevice(tabletStyles, mobileStyles);

const SquareCardComponent = (props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.tiltedView} />

      <View style={styles.infoContainer}>
        <View style={{borderWidth: 0, flexGrow: 1, flexDirection: 'column'}}>
          <View style={{flex: 2}}>
            <Image source={require('../../../assets/images/mobile-app.png')} style={styles.image} resizeMode='stretch' />
          </View>

          <View style={{borderWidth: 0, flex: 2, paddingHorizontal: 8}}>
            <BoldLabelComponent label={props.item.title} numberOfLines={1} style={{ fontSize: smallFontSize() }} />
            <View style={[cardStyles.subtitleContainer, { borderWidth: 0 }]}>
              <Text style={[cardStyles.subtitle, { fontSize: smallFontSize() }]}>{t('point', { count: props.item.points })}</Text>
              <AudioButtonComponent hasAudio={props.item.has_audio} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 160,
    marginLeft: 80,
    marginTop: 40,
  },
  tiltedView: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 200,
    borderTopWidth: 30,
    borderRadius: 14,
    borderRightColor: "transparent",
    borderTopColor: "white",
    transform: [{ rotate: "180deg" }],
    top: 1.2,
    borderTopLeftRadius: 0,
    position: 'absolute',
    top: -28.8,
    zIndex: -1
  },
  infoContainer: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 10,
    borderTopRightRadius: 0,
    paddingTop: 10,
  },
  image: {
    height: 170,
    width: '80%',
    top: -75,
    zIndex: 1
  }
});

export default SquareCardComponent;