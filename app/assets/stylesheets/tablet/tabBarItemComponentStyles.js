import {StyleSheet, Platform} from 'react-native';
import {smallFontSize} from '../../../utils/font_size_util';

const TabBarItemComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: 50
  },
  itemContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: smallFontSize(),
    marginTop: 2
  },
  focusedLine: {
    alignSelf: 'stretch',
    borderRadius: 6,
    height: 2.1,
    ...Platform.select({
      ios: {
        marginBottom: 20,
      },
      android: {
        marginBottom: 0.6,
      }
    })
  }
});

export default TabBarItemComponentStyles;