import { StyleSheet } from 'react-native';
import { colors } from '@src/constants';
import { normalize } from '@src/utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  button: {
    position: 'absolute',
    bottom: normalize(10),
    right: normalize(10),
    backgroundColor: colors.white,
  },
});
