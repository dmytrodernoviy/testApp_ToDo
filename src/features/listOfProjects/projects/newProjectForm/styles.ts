import { StyleSheet } from 'react-native';
import { colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: colors.background,
  },
});
