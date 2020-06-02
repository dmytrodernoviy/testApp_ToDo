import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH, normalize } from '@src/utils/normalize';
import { fonts, colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    height: '35%',
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: colors.background,
  },
  forgot: {
    marginTop: normalize(10, 'height'),
  },
  forgot_label: {
    ...fonts.main,
  },
});
