import { StyleSheet } from 'react-native';
import { colors } from '@src/constants';
import { normalize } from '@src/utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: normalize(5),
    paddingVertical: normalize(10, 'height'),
  },
  item: {
    backgroundColor: colors.primary,
    borderRadius: normalize(10),
  },
  separate: {
    height: normalize(10),
  },
  title: {
    color: colors.white,
  },
});
