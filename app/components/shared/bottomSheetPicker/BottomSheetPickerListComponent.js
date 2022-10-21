import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Color from '../../../themes/color';
import BottomSheetPickerListItemComponent from './BottomSheetPickerListItemComponent';
import BoldLabelComponent from '../BoldLabelComponent';
import DashedLineComponent from '../DashedLineComponent';
import { screenHorizontalPadding } from '../../../constants/component_constant';
import {xLargeFontSize} from '../../../utils/font_size_util';

class BottomSheetPickerListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: this.props.selectedItem,
      searchedItem: '',
      items: this.props.items,
      contentHeight: props.contentHeight,
    };
  }

  updateItems(items) {
    this.setState({ items });
  }

  setContentHeight(contentHeight) {
    this.setState({ contentHeight });
  }

  onSelectItem(item) {
    if (item.disabled)
      return;

    this.setState({ selectedItem: item.value });
    this.props.onSelectItem(item)
  }

  renderListItem() {
    return <BottomSheetPickerListItemComponent
              items={this.state.items}
              selectedItem={this.state.selectedItem}
              onSelectItem={(item) => this.onSelectItem(item)}
              showSubtitle={this.props.showSubtitle}
              showConfirmDelete={this.props.showConfirmDelete}
              isDeletable={this.props.isDeletable}
              defaultSelectedItem={this.props.selectedItem}
              customListItem={this.props.customListItem}
           />
  }

  renderList() {
    return (
      <ScrollView contentContainerStyle={[styles.scrollViewContainer, this.props.scrollViewStyle]}>
        <Pressable>{ this.renderListItem() }</Pressable>
      </ScrollView>
    )
  }

  renderTitle() {
    return <React.Fragment>
            <BoldLabelComponent label={this.props.title} style={styles.modalTitle} />
            <DashedLineComponent/>
           </React.Fragment>
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{height: hp(this.state.contentHeight), backgroundColor: Color.whiteColor}}>
          { this.renderTitle() }
          { this.renderList() }
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    padding: screenHorizontalPadding,
    paddingTop: 10,
    flexGrow: 1,
    paddingBottom: 20,
  },
  modalTitle: {
    fontSize: xLargeFontSize(),
    marginBottom: 16,
    paddingHorizontal: screenHorizontalPadding,
  }
});

export default BottomSheetPickerListComponent;