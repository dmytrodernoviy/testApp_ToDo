import { StyleSheet } from 'react-native';
import { colors } from '@src/constants';
import { normalize } from '@src/utils';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  content: {
    height: '55%',
    borderRadius: normalize(10),
    backgroundColor: colors.background,
    justifyContent: 'center',
    paddingHorizontal: normalize(10),
  },
  keyboardAvoid: {
    flex: 1,
    width: '95%',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: -normalize(20),
    right: -normalize(20),
    transform: [{ rotate: '45deg' }],
    backgroundColor: colors.primary,
  },
});
