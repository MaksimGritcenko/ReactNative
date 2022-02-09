import { StyleSheet } from "react-native";

import { CONTENT_MARGIN_TOP } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    InstructionsWrapper: {
        flex: 1,
        paddingTop: 10,
    },
    InnerInstructionsWrapper: {
        marginTop: CONTENT_MARGIN_TOP,
        backgroundColor: '#fff'
    },
    Instructions: {
        padding: 30,
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',
    },
});
