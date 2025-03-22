import React from 'react';
import {StyleSheet, View} from 'react-native';

import ThemeSampleComponent from './ThemeSampleComponent';

const changeThemeInfoSampleComponent = (props) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between'}}>
      <ThemeSampleComponent
        theme={props.theme}
        containerStyle={styles.container}
        appContainerStyle={styles.appContainer}
        appBorderRadius={20}
        longCardContainerStyle={{
          height: 70,
          borderRadius: 6
        }}
        longCardImageContainerStyle={{
          width: '35%',
          height: '100%'
        }}
        longCardTextContainer={{
          paddingVertical: 10
        }}
        longCardBlankTextStyle={{
          height: 6,
        }}
        gridCardContainerStyle={{
          height: '25%',
          marginTop: 7,
          borderRadius: 6,
        }}
        gridCardImageStyle={{
          width: '90%',
          height: '100%',
          marginTop: 0
        }}
        mainPadding={8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -20,
    left: 220 / 4.2
  },
  appContainer: {
    width: 250,
    height: 380,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 1.5,
    padding: 12,
    borderColor: 'black'
  }
});

export default changeThemeInfoSampleComponent;