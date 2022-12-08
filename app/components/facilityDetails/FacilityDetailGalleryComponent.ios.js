import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'
import DeviceInfo from 'react-native-device-info';

import EmptyImageComponent from '../shared/EmptyImageComponent';
import color from '../../themes/color';
import Facility from '../../models/Facility';
import {getStyleOfDevice} from '../../utils/responsive_util';

const FacilityDetailGalleryComponent = (props) => {
  const [galleries] = React.useState(Facility.findByUuid(props.uuid).galleries);
  const renderImages = () => {
    return galleries.map((gallery, index) => {
      return <Image key={index} source={gallery} style={{width: '100%', height: '100%'}} />
    });
  }

  const renderImageSlider = () => {
    return <Swiper style={styles.wrapper} showsButtons={false}
              dotStyle={{bottom: -20, backgroundColor: '#818181'}}
              activeDotStyle={{bottom: -20, backgroundColor: color.secondaryColor}}
            >
              {renderImages()}
            </Swiper>
  }

  return (
    <View style={{height: galleries.length > 0 ? getStyleOfDevice(260, DeviceInfo.hasDynamicIsland() ? 256 : 216) : getStyleOfDevice(260, DeviceInfo.hasDynamicIsland() ? 220 : 180)}}>
      { galleries.length > 0 ? renderImageSlider()
        : <EmptyImageComponent iconSize={getStyleOfDevice(32, 40)} labelStyle={{fontSize: 12}} iconContainerStyle={styles.emptyIconContainer} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  emptyIconContainer: {
    paddingHorizontal: getStyleOfDevice(20, 18),
    paddingVertical: getStyleOfDevice(28, 22)
  }
})

export default FacilityDetailGalleryComponent;