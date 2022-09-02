export type ModalProps = {
  title: string;
  message: string;
  type: 'success' | 'error' | 'information' | 'confirm' | 'none';
  // isModalVisible: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
};
