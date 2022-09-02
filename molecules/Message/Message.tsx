import { View } from 'react-native';

import { COLORS } from '@global/colors';

import { Typography } from '@components/core/Typography';

import { responsiveSize } from '@utils/responsiveSize';

import { styles } from './styles';

type Props = {
  title: string;
  message: string;
  icon?: JSX.Element;
  titleColor?: string;
};

export function Message({
  title = '',
  message = '',
  icon,
  titleColor = COLORS.dark100,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {icon}
        <Typography
          title
          style={{ color: titleColor }}
          mb={responsiveSize(1)}
          ml={responsiveSize(1)}
        >
          {title}
        </Typography>
      </View>
      <Typography style={styles.colorDark} mb={responsiveSize(1)}>
        {message}
      </Typography>
    </View>
  );
}
