import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import color from '../../themes/color';

const BottomSheetModalComponent = (props, ref) => {
  const renderBackdrop = useCallback( props => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
    />
  ), []);

  return (
    <BottomSheetModal
      ref={ref}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      snapPoints={props.snapPoints}
      onDismiss={() => !!props.onDismiss && props.onDismiss()}
      onChange={(index) => !!props.onChange && props.onChange(index)}
    >
      <BottomSheetScrollView style={styles.contentContainer}>
        { props.content }
      </BottomSheetScrollView>
    </BottomSheetModal>
  )
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: color.whiteColor,
    width: '100%',
    flexGrow: 1.,
  },
});

export default  React.forwardRef(BottomSheetModalComponent);