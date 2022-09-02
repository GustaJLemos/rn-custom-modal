import React from 'react';

import { ModalProps } from '../types/ModalProps';

export type Provider = {
  modalProps: ModalProps;
  isModalVisible: boolean;
  setModalProps: React.Dispatch<React.SetStateAction<ModalProps>>;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
