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
    borderColor: COLORS.orange,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLORS.orange,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCancel: {
    width: '48%',
    backgroundColor: COLORS.grey,
    borderColor: COLORS.grey,
  },
  buttonConfirm: {
    width: '48%',
    backgroundColor: COLORS.orange,
    borderWidth: 0,
  },
  colorDark: {
    color: COLORS.dark100,
  },
});
