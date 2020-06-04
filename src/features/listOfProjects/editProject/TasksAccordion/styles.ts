import { StyleSheet } from 'react-native';
import { colors } from '@src/constants';
import { normalize } from '@src/utils';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: normalize(10),
    marginBottom: normalize(5, 'height'),
  },
  item: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: normalize(5, 'height'),
    backgroundColor: colors.primary,
    borderRadius: normalize(5),
  },
  title: {
    color: colors.white,
  },
});
