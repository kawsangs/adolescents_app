import { StyleSheet } from 'react-native';

import color from '../../../themes/color';

const ThemeSampleComponentStyles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'white',
    height: 300,
    width: 160,
    padding: 6,
  },
  selectedContainer: {
    borderWidth: 3,
    borderColor: color.secondaryColor,
    borderRadius: 10,
  },
  headerContainer: {
    alignItems: 'center',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    width: '100%',
    height: 20,
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  headerLabel: {
    color: 'white',
    fontSize: 8,
    lineHeight: 12,
    marginTop: -2
  },
  logo: {
    width: 10,
    height: 10,
    marginHorizontal: 6,
  },
  themeImage: {
    width: 140,
    height: 230,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    position: 'absolute',
  },
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 4,
    height: 35,
    paddingLeft: 4,
    paddingRight: 4,
    width: '100%',
  },
  gridCardContainer: {
    maxHeight: 60,
    width: 60,
    height: 50,
    borderRadius: 6,
    backgroundColor: 'white',
    marginTop: 4,
    paddingLeft: 3
  }
});

export default ThemeSampleComponentStyles;