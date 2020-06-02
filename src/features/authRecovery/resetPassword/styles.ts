import { StyleSheet } from 'react-native';
import { colors, fonts } from '@src/constants';
import { normalize } from '@src/utils';
import { SCREEN_WIDTH } from '@src/utils/normalize';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    paddingVertical: normalize(15, 'height'),
  },
  form: {
    alignItems: 'center',
  },
  title: {
    marginBottom: normalize(20),
    ...fonts.title,
  },
  info: {
    width: SCREEN_WIDTH * 0.8,
    ...fonts.main,
    textAlign: 'center',
    marginBottom: normalize(10),
  },
  toLogin: {
    flexDirection: 'row',
  },
  text: {
    ...fonts.main,
  },
});
