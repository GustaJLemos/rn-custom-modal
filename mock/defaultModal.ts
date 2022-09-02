import { ModalProps } from '../types/ModalProps';

export const DEFAULT_MODAL: ModalProps = {
  title: '',
  message: '',
  type: 'none',
  // isModalVisible: boolean;
  onConfirm: () => undefined,
  onCancel: () => undefined,
};
