import React from 'react';
import {View, StyleSheet} from 'react-native';

import ImageComponent from '../shared/ImageComponent';
import EmptyImageComponent from '../shared/EmptyImageComponent';
import { cardBorderRadius } from '../../constants/component_constant';
import {defaultFacilities} from '../../constants/facility_constant';
import DownloadedFile from '../../models/DownloadedFile';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityLogoComponent = (props) => {
  const logoPath = DownloadedFile.getPathByUrl(props.facility.logo)
  const renderDefaultImage = () => {
    let logo = null;
    defaultFacilities.map(defaultFacility => {
      if (props.facility.name.includes(defaultFacility.name))
        logo = defaultFacility.logo
    })
    return !!logo ? <ImageComponent source={logo} resizeMode="contain" imageStyle={[styles.image, props.customImageStyle]} emptyStyle={styles.emptyView} /> : <EmptyImageComponent iconContainerStyle={props.emptyIconContainerStyle}/>
  }

  return (
      <View style={{flex: getStyleOfDevice(0.8, 1.2), justifyContent: 'center', alignItems: 'center'}}>
        { !!logoPath ? <ImageComponent source={{uri: logoPath}} resizeMode="contain" imageStyle={[styles.image, props.customImageStyle]} emptyStyle={styles.emptyView} />
          : renderDefaultImage()
        }
      </View>
    )
}

const styles = StyleSheet.create({
  image: {
    marginTop: -2,
    width: getStyleOfDevice('75%', '65%'),
    height: getStyleOfDevice('75%', '65%'),
  },
  emptyView: {
    borderTopLeftRadius: cardBorderRadius,
    borderBottomLeftRadius: cardBorderRadius,
  }
});

export default FacilityLogoComponent