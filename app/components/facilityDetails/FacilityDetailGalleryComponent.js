import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'

const FacilityDetailGalleryComponent = (props) => {
  const galleries = [
    require('../../assets/images/intro_2.jpg'),
    require('../../assets/images/intro_2.jpg'),
    require('../../assets/images/intro_3.jpg'),
    require('../../assets/images/intro_3.jpg')
  ]

  const renderItems = () => {
    return galleries.map((gallery, index) => {
      return <Image key={index} source={gallery} style={{width: '100%', height: '100%'}} />
    });
  }

  const renderImageSlider = () => {
    return <Swiper style={styles.wrapper} showsButtons={false}
              dotStyle={{bottom: -20}}
              activeDotStyle={{bottom: -20}}
            >
              {/* {renderItems()} */}

              <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
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