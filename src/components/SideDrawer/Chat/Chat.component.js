import React from "react";
import {
    Text,
    TextInput,
    Pressable,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { TypingAnimation } from 'react-native-typing-animation';
import { Ionicons } from '@expo/vector-icons';

import MainComponent from "../../Main/Main.component";

import { styles } from './Chat.styles';
import { ScrollView } from "react-native-gesture-handler";

export const ChatComponent = (props) => {
    const {
        onAnswerClick,
        activeQuestionId,
        chatMsgBottomOffset,
        setChatMsgHeight,
        onInputChange,
        onInputSend,
        inputTxt,
        activeChatChain,
        activeQuestionIdx,
        isTypingTimeoutOver,
        isFormulationLoading,
    } = props;

    function renderProgress() {
        const totalQst = activeChatChain.length;

        return (
            <View style={ styles.ChatProgress }>
                <Text>
                    { `${ activeQuestionIdx + 1 || 1 } / ${ totalQst }` }
                </Text>
            </View>
        );
    }

    function renderInputField() {
        return (
            <View style={ styles.ChatInput }>
                <TextInput
                  placeholder="Type your answer here..."
                  multiline={ true }
                  onChangeText={ onInputChange }
                  value={ inputTxt }
                />
                <Pressable
                  style={ styles.ChatInputButton }
                  onPress={ onInputSend }
                >
                    <Ionicons name="ios-send-outline" size={24} color="black" />
                </Pressable>
            </View>
        );
    }

    function renderChatMessage(txt, isAnswer) {
        let style = { ...styles.ChatMessage };

        if (isAnswer) {
            style = {
                ...style,
                ...styles.ChatAnswer
            }
        }

        return (
            <View style={ style }>
                <Text>
                    { txt }
                </Text>
            </View>
        );
    }

    function renderChatMessages({ formulationText }, i) {
        const { answers } = props;

        return (
            <View style={ styles.ChatMessagesWrapper }>
                { renderChatMessage(formulationText) }
                { answers[i] && renderChatMessage(answers[i], true) }
            </View>
        );
    }

    function renderChatBlocks() {
        const { formulations } = props;

        return (
            <>
                { formulations
                    .slice(0, activeQuestionIdx + 1)
                    .map(renderChatMessages)
                }
                { renderTypingAnim() }
            </>
        );
    }

    function renderTypingAnim() {
        if (!isFormulationLoading && isTypingTimeoutOver) {
            return null;
        }

        return <View style={ {
              ...styles.ChatMessage,
              ...styles.ChatTypingAnim,
        } }>
            <TypingAnimation
              style={{ bottom: 4 }}
              dotColor="black"
              dotMargin={10}
              dotAmplitude={2}
              dotSpeed={0.15}
              dotRadius={3.5}
              dotX={0}
              dotY={0}
            />
        </View>;
    }

    function renderQstAnswers() {
        const { formulations } = props;

        if (
            !formulations.length
            || !activeQuestionId
            || !isTypingTimeoutOver
        ) {
            return null;
        }

        const answers = formulations[activeQuestionIdx].answers;

        return (
            <View style={ styles.QuestionAnswers }>
                { answers.map(renderSingleQstAnswer) }
            </View>
        );
    }

    function renderSingleQstAnswer(txt) {
        return (
            <View style={ styles.QuestionAnswerItem }>
                <TouchableOpacity onPress={ () => onAnswerClick(txt) }>
                    <Text>
                        { txt }
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    function renderNoChatMsg() {
        return (
            <View style={ styles.NoChatWrapper }>
                <View style={ styles.NoChat }>
                    <Text style={ styles.NoChatTxt }>
                        You don't have an active chat. Use search!
                    </Text>
                </View>
            </View>
        );
    }


    function renderActiveChat() {
        const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : -200;

        if (
            isTypingTimeoutOver
            && !activeChatChain
            || !activeChatChain.length
        ) {
            return renderNoChatMsg();
        }

        return (
            <View style={ styles.ChatWrapper }>
                { renderProgress() }
                <ScrollView
                    contentContainerStyle={ styles.ChatScrollView }
                    showsVerticalScrollIndicator={ false }
                    alwaysBounceVertical={ true }
                    automaticallyAdjustContentInsets={ true }
                    contentInset={ { bottom: chatMsgBottomOffset } }
                >
                    <View style={ styles.ChatMessagesContainer }>
                        { renderChatBlocks() }
                    </View>
                </ScrollView>
                <KeyboardAvoidingView
                    behavior={ Platform.OS === 'ios' ? 'position' : 'height' }
                    keyboardVerticalOffset={keyboardVerticalOffset}
                    style={ styles.QstsAnswInputContainer }
                >
                    <View
                        style={ styles.QstsAnswInputWrapper }
                        onLayout={ (e) => setChatMsgHeight(e.nativeEvent.layout.height) }
                    >
                        { renderQstAnswers() }
                        <View style={ styles.InputBlock }>
                            { renderInputField() }
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }

    return (
        <MainComponent>
            <View style={ styles.Chat }>
                { renderActiveChat() }
            </View>
        </MainComponent>
    );
};

export default ChatComponent;