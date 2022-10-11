import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'

import color from '../../themes/color';
import EmptyMediaComponent from '../shared/EmptyMediaComponent';
import Facility from '../../models/Facility';

const FacilityDetailGalleryComponent = (props) => {
  const renderImages = () => {
    const galleries = Facility.findByUuid(props.uuid).galleries;
    if (galleries.length == 0)
      return <EmptyMediaComponent isImage={true} iconSize={26}/>

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
    <View style={{height: 216}}>
      { renderImageSlider() }
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
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
  }
})

export default FacilityDetailGalleryComponent;