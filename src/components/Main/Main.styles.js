import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundWrapper: {
        flex: 1,
    },
    grassImage: {
        flex: 1,
        width: '100%'
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