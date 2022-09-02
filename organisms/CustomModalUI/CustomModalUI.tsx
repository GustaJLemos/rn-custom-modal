import React from 'react';
import { Modal, View } from 'react-native';

import { useModal } from '../../hooks/useModal';
import { ModalProps } from '../../types/ModalProps';
import { ConfirmModal } from '../ConfirmModal';
import { ErrorModal } from '../ErrorModal';
import { InformationModal } from '../InformationModal';
import { SuccessModal } from '../SuccessModal';
import { styles } from './styles';

// eslint-disable-next-line react/display-name
export const CustomModalUI = React.forwardRef((props: ModalProps, ref) => {
  const { isModalVisible, modalProps, closeModal, showModal } = useModal();

  React.useImperativeHandle(ref, () => ({
    showModal,
    closeModal,
  }));

  if (modalProps.type === 'none') {
    return <></>;
  }

  return (
    <Modal visible={isModalVisible} transparent style={styles.modalContainer}>
      <View style={styles.background}>
        {modalProps.type === 'confirm' && <ConfirmModal />}
        {modalProps.type === 'success' && <SuccessModal />}
        {modalProps.type === 'information' && <InformationModal />}
        {modalProps.type === 'error' && <ErrorModal />}
      </View>
    </Modal>
  );
});
