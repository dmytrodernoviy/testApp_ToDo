import { StyleSheet } from 'react-native';
import { colors } from '@src/constants';
import { SCREEN_WIDTH } from '@src/utils/normalize';

export default StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: colors.background,
  },
});
