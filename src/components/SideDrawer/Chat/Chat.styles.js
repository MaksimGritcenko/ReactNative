import { Dimensions, StyleSheet } from "react-native";

import { whiteYellow, whiteDarkYellow, lightViolet } from '../../../constants/Colors';
import { CONTENT_PADDING_TOP } from '../../../constants/Layout';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    Chat: {
        flex: 1,
        paddingTop: CONTENT_PADDING_TOP,
        alignItems: 'center'
    },
    ChatScrollView: {
        width: width - width / 20,
        paddingBottom: 10
    },
    ChatWrapper: {
        width,
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
        width: '95%',
        padding: '2.5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    QuestionAnswerItem: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 5,
        paddingLeft: 10,
        marginBottom: 5,
        width: '49%',
        borderRadius: 10,
        backgroundColor: whiteYellow
    },
    ChatInput: {
        display: 'flex',
        paddingVertical: 10,
        marginBottom: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        minHeight: 50,
        borderRadius: 20,
        paddingRight: 55,
        width: "100%",
        backgroundColor: whiteYellow
    },
    ChatInputButton: {
        position: 'absolute',
        right: 15,
        top: 12,
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
        borderBottomLeftRadius: 0,
        maxWidth: '60%',
        marginTop: 20,
        backgroundColor: whiteDarkYellow
    },
    ChatAnswer: {
        alignSelf: 'flex-end',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 0,
        backgroundColor: lightViolet
    },
    ChatTypingAnim: {
        justifyContent: 'center',
        height: 34,
        width: 70,
        paddingLeft: 30,
    },
    InputBlock: {
        width: '100%',
        paddingHorizontal: '2.5%',
        paddingTop: 10,
        minHeight: 70,
        backgroundColor: whiteDarkYellow
    }
});
