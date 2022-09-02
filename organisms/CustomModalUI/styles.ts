import { StyleSheet } from 'react-native';

import { COLORS } from '@global/colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },

  background: {
    flex: 1,
    backgroundColor: COLORS.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
