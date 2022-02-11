import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundWrapper: {
    zIndex: 999,
    width: 100,
    height: '20%',
    marginHorizontal: 100,
    alignSelf: 'center',
  },
  LogoWrapper: {
    zIndex: 2,
    top: Platform.OS === 'ios' ? 40 : 55,
    width: 70,
    height: 70,
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -35 }],
  },
  Logo: {
    width: 70,
    height: 70,
    borderRadius: 70,
  }
})