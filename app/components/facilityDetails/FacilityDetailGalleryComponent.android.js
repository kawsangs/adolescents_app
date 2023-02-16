import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import EmptyImageComponent from '../shared/EmptyImageComponent';
import Facility from '../../models/Facility';
import {getStyleOfDevice} from '../../utils/responsive_util';
import imageSources from '../../constants/image_source_constant';

const FacilityDetailGalleryComponent = (props) => {
  const logo = Facility.findByUuid(props.uuid).logo;
  const logoSize = getStyleOfDevice(160, 140)
  return (
    <View style={{height: getStyleOfDevice(220, 180), justifyContent: 'center', alignItems: 'center'}}>
      { logo ? <Image source={imageSources[logo]} style={{width: logoSize, height: logoSize}} />
        : <EmptyImageComponent iconSize={getStyleOfDevice(32, 40)} labelStyle={{fontSize: 12}} iconContainerStyle={styles.emptyIconContainer} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  emptyIconContainer: {
    paddingHorizontal: getStyleOfDevice(20, 18),
    paddingVertical: getStyleOfDevice(26, 20)
  }
})

export default FacilityDetailGalleryComponent;