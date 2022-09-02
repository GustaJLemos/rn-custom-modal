import { StyleSheet } from 'react-native';

import { COLORS } from '@global/colors';

import { responsiveSize } from '@utils/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    width: responsiveSize(33),
    padding: responsiveSize(1),
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.grey100,
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.grey100,
    borderWidth: 0,
  },
});
