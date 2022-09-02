import { View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '@global/colors';
import { t } from 'i18n-js';

import { Button } from '@components/core/Button';

import { responsiveSize } from '@utils/responsiveSize';

import { useModal } from '../../hooks/useModal';
import { Message } from '../../molecules/Message/Message';
import { styles } from './styles';
export function ErrorModal() {
  const { modalProps, closeModal } = useModal();

  return (
    <View style={styles.container}>
      <Message
        title={modalProps.title}
        message={modalProps.message}
        icon={
          <FontAwesome
            name={'close'}
            size={responsiveSize(2.4)}
            color={COLORS.red}
          />
        }
        titleColor={COLORS.red}
      />
      <Button
        style={styles.button}
        onPress={() => {
          modalProps.onConfirm ? modalProps.onConfirm() : null, closeModal();
        }}
      >
        {t('common.ok')}!
      </Button>
    </View>
  );
}
