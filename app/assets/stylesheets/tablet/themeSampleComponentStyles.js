import { StyleSheet, Platform } from 'react-native';

const ThemeSampleComponentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    position: 'absolute',
    top: -60,
    left: 220 / 1.3,
  },
  appThemeContainer: {
    borderColor: 'black',
    borderWidth: 1.5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: 450,
    height: 580,
    padding: 12,
  },
  headerContainer: {
    alignItems: 'center',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    width: '100%',
    height: 56,
    flexDirection: 'row',
    paddingHorizontal: 4,
  },
  logo: {
    width: 4,
    height: 4,
    marginHorizontal: 2,
  },
  themeImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  longCardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    height: 110,
    paddingLeft: 4,
    paddingRight: 4,
    width: '100%',
  },
  longCardImageContainer: {
    width: '35%',
    height: '90%',
    justifyContent: 'center'
  },
  longCardTextContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 6,
    paddingVertical: 14
  },
  longCardBlankText: {
    backgroundColor: 'black',
    borderRadius: 8,
    height: 10,
    opacity: 0.3,
  },
  gridCardContainer: {
    width: '47%',
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 6,
    ...Platform.select({
      ios: {
        height: 110
      },
      android: {
        height: '25%'
      }
    })
  },
  gridCardImage: {
    width: '90%',
    height: '96%',
    marginTop: 4,
    alignSelf: 'center',
    marginLeft: 4
  }
});

export default ThemeSampleComponentStyles;