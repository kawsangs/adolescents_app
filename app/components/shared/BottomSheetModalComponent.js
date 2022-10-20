import React, { useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
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
      onPress={() => ref.current.dismiss()}
    />
  ), []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={ref}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        snapPoints={props.snapPoints}
        onDismiss={() => !!props.onDismiss && props.onDismiss()}
        onChange={(index) => !!props.onChange && props.onChange(index)}
      >
        {/* <BottomSheetScrollView style={styles.contentContainer}> */}
          {/* { props.content } */}
        {/* </BottomSheetScrollView> */}

        <ScrollView>
          { props.content }
        </ScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: color.whiteColor,
    width: '100%',
    flexGrow: 1
  },
});

export default  React.forwardRef(BottomSheetModalComponent);