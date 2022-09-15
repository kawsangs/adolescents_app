import {StyleSheet} from 'react-native';
import {smallFontSize} from '../../../utils/font_size_util';

const TabBarItemComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: 50
  },
  itemContainer: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 12,
    paddingTop: 6
  },
  label: {
    fontSize: smallFontSize(),
    marginTop: 2
  },
  focusedLine: {
    alignSelf: 'stretch',
    borderRadius: 6,
    height: 2.1,
    marginBottom: 0.6
  }
});

export default TabBarItemComponentStyles;