import { StyleSheet } from 'react-native';
import { FONTS, COLORS} from '../../theme';

export const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontFamily: FONTS.BOLD,
    textTransform: 'uppercase',
  },
  button: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 10
   }
});