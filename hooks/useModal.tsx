import { useContext } from 'react';

import { ModalContext } from '../contexts';
import { DEFAULT_MODAL } from '../mock/defaultModal';
import { ModalProps } from '../types/ModalProps';

export function useModal() {
  const { modalProps, setModalProps, isModalVisible, setIsModalVisible } =
    useContext(ModalContext);
  //const [modalProps, setModalProps] = useState<ModalProps>(props);
  // const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = (modalProps: ModalProps) => {
    setModalProps(modalProps);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setModalProps(DEFAULT_MODAL);
    setIsModalVisible(false);
  };

  return {
    modalProps,
    isModalVisible,
    showModal,
    closeModal,
  };
}
