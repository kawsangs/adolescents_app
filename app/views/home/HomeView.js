import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeView = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Home screen</Text>

      <LinearGradient
        colors={['#347cb6', 'rgba(170, 73, 133, 0.88)']}
        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
        style={styles.linearGradient}
      >
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});

export default HomeView