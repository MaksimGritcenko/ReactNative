import { StyleSheet } from "react-native";

import { CONTENT_MARGIN_TOP } from "../../../constants/Layout";

export const styles = StyleSheet.create({
    InstructionsWrapper: {
        flex: 1,
        paddingTop: 10,
    },
    InnerInstructionsWrapper: {
        marginTop: CONTENT_MARGIN_TOP,
        marginHorizontal: 8,
        marginBottom: 8,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 20
    },
    Instructions: {
        padding: 30,
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',
    },
});
