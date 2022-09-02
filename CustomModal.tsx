import React from 'react';

import { ModalProvider } from './contexts';
import { CustomModalUI } from './organisms/CustomModalUI/CustomModalUI';
import { ModalProps } from './types/ModalProps';

type ModalRef = {
  showModal: (props: ModalProps) => void;
  closeModal: () => void;
};

const modalRef = React.createRef<ModalRef>();

export function CustomModal(props: ModalProps) {
  return (
    <ModalProvider>
      <CustomModalUI ref={modalRef} {...props} />
    </ModalProvider>
  );
}

CustomModal.showModal = (props: ModalProps) => {
  modalRef.current?.showModal(props);
};

CustomModal.closeModal = () => {
  modalRef.current?.closeModal();
};
