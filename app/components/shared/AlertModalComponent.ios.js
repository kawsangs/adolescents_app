import React from 'react';
import {StyleSheet} from 'react-native';
import {Modal, Portal} from 'react-native-paper';

import AlertModalConfirmationButtonsComponent from './alertModals/AlertModalConfirmationButtonsComponent';
import {cardBorderRadius} from '../../constants/component_constant';
import color from '../../themes/color';

const AlertModalComponent = (props) => {
  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={props.onDismiss}
        contentContainerStyle={styles.container}
      >
        {props.message()}
        <AlertModalConfirmationButtonsComponent
          onCancel={() => props.onDismiss()}
          onConfirm={() => props.onConfirm()}
          leftButtonLabel={props.leftButtonLabel}
          rightButtonLabel={props.rightButtonLabel}
          isOutlineButton={true}
          rightButtonStyle={{borderColor: color.redColor}}
          rightButtonLabelStyle={{color: color.redColor}}
        />
      </Modal>
    </Portal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: cardBorderRadius,
    justifyContent: 'flex-start',
    padding: 24,
    paddingBottom: 4,
    width: '90%',
  }
});

export default AlertModalComponent;