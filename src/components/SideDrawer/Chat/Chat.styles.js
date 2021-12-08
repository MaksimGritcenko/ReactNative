import { Dimensions, StyleSheet } from "react-native";

import { whiteYellow, whiteDarkYellow, lightViolet } from '../../../constants/Colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    Chat: {
        backgroundColor: whiteYellow,
        flex: 1,
        alignItems: 'center'
    },
    ChatScrollView: {
        width: width - width / 20,
        paddingBottom: 10
    },
    ChatWrapper: {
        width,
        paddingHorizontal: '2.5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    ChatMessagesContainer: {
        width: "100%",
        alignItems: 'center'
    },
    QstsAnswInputContainer: {
        width: "100%"
    },
    QuestionAnswers: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        backgroundColor: whiteYellow
    },
    QuestionAnswerItem: {
        paddingVertical: 8,
        paddingHorizontal: 5,
        paddingLeft: 10,
        marginBottom: 5,
        width: '49%',
        borderRadius: 10,
        borderWidth: 1
    },
    ChatInput: {
        display: 'flex',
        justifyContent: 'center',
        paddingVertical: 10,
        marginBottom: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        paddingRight: 55,
        width: "100%",
        backgroundColor: whiteYellow
    },
    QstsAnswInputWrapper: {
        backgroundColor: whiteYellow

    },
    ChatInputButton: {
        position: 'absolute',
        right: 15,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ChatProgress: {
        marginVertical: 5
    },
    ChatMessagesWrapper: {
        width: '100%',
    },
    ChatMessage: {
        alignSelf: 'flex-start',
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 15,
        maxWidth: '60%',
        marginTop: 20,
        backgroundColor: whiteDarkYellow
    },
    ChatAnswer: {
        alignSelf: 'flex-end',
        backgroundColor: lightViolet
    },
    ChatTypingAnim: {
        justifyContent: 'center',
        height: 34,
        width: 70,
        paddingLeft: 30,
    }
});
