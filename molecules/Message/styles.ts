import { StyleSheet } from 'react-native';

import { COLORS } from '@global/colors';

import { responsiveSize } from '@utils/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveSize(1),
  },
  colorDark: {
    color: COLORS.dark100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
