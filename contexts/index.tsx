import React, { createContext, useState } from 'react';

import { DEFAULT_MODAL } from '../mock/defaultModal';
import { ModalProps } from '../types/ModalProps';
import { Provider } from './provider';

export const ModalContext = createContext<Provider>({} as Provider);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalProps, setModalProps] = useState<ModalProps>(DEFAULT_MODAL);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ModalContext.Provider
      value={{ modalProps, isModalVisible, setModalProps, setIsModalVisible }}
    >
      {children}
    </ModalContext.Provider>
  );
};
