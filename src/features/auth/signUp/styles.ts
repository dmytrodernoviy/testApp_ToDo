import { StyleSheet } from 'react-native';
import { normalize } from '@src/utils';
import { fonts, colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  keyboardAvoid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
    flexDirection: 'row',
    marginBottom: normalize(10, 'height'),
  },
  text: {
    ...fonts.main,
  },
});
