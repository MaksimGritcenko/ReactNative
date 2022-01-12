import { Dimensions, StyleSheet } from "react-native";

import { getScreenHeight } from "../../utils/Window";

export const styles = StyleSheet.create({
    ChatModal: {
        flex: 1,
        backgroundColor: 'yellow',
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 99,
        height: getScreenHeight()
    }
});
