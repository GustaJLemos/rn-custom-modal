import React from 'react';
import { View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '@global/colors';
import { t } from 'i18n-js';

import { Button } from '@components/core/Button';

import { responsiveSize } from '@utils/responsiveSize';

import { useModal } from '../../hooks/useModal';
import { Message } from '../../molecules/Message/Message';
import { styles } from './styles';

export function InformationModal() {
  const { modalProps, closeModal } = useModal();

  return (
    <View style={styles.container}>
      <Message
        title={modalProps.title}
        message={modalProps.message}
        icon={
          <FontAwesome
            name="exclamation"
            size={responsiveSize(2.4)}
            color={COLORS.grey100}
          />
        }
        titleColor={COLORS.grey100}
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
