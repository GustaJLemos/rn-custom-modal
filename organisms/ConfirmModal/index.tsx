import { View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '@global/colors';
import { t } from 'i18n-js';

import { Button } from '@components/core/Button';

import { responsiveSize } from '@utils/responsiveSize';

import { useModal } from '../../hooks/useModal';
import { Message } from '../../molecules/Message/Message';
import { styles } from './styles';

export function ConfirmModal() {
  const { modalProps, closeModal } = useModal();

  return (
    <View style={styles.container}>
      <Message
        title={modalProps.title}
        message={modalProps.message}
        icon={
          <MaterialCommunityIcons
            name="gesture-tap-button"
            size={responsiveSize(2.4)}
            color={COLORS.orange}
          />
        }
        titleColor={COLORS.orange}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            modalProps.onCancel ? modalProps.onCancel() : null, closeModal();
          }}
          style={styles.buttonCancel}
        >
          {t('common.cancel')}
        </Button>
        <Button
          onPress={() => {
            modalProps.onConfirm ? modalProps.onConfirm() : null, closeModal();
          }}
          style={styles.buttonConfirm}
        >
          {t('common.confirm')}
        </Button>
      </View>
    </View>
  );
}
