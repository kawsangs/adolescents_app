import { StyleSheet } from 'react-native';

const ThemeSampleComponentStyles = StyleSheet.create({
  appContainer: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    height: 168,
    width: 100,
    padding: 4,
  },
  headerContainer: {
    alignItems: 'center',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    width: '100%',
    height: 20,
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
    borderRadius: 4,
    height: 25,
    paddingLeft: 4,
    paddingRight: 4,
    width: '100%',
  },
  longCardBlankText: {
    borderRadius: 8,
    height: 3,
    opacity: 0.3,
  },
  gridCardContainer: {
    width: '47%',
    height: 25,
    borderRadius: 4,
    backgroundColor: 'white',
    marginTop: 4,
  }
});

export default ThemeSampleComponentStyles;