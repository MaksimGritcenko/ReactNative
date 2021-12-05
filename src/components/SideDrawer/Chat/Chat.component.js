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
import ChatModal from "../../../components/ChatModal";

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
        inputTxt
    } = props;

    function renderProgress() {
        const {
            formulations,
            activeChatChain
        } = props;

        const currentQst = formulations.length;
        const totalQst = activeChatChain.length;

        return (
            <View style={ styles.ChatProgress }>
                <Text>
                    { `${ currentQst || 1 } / ${ totalQst }` }
                </Text>
            </View>
        );
    }

    function renderInputField() {
        return (
            <View style={ styles.ChatInput }>
                <TextInput
                  placeholder="Type your answer here..."
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
                { formulations.map(renderChatMessages) }
                { renderTypingAnim() }
            </>
        );
    }

    function renderTypingAnim() {
        const { isFormulationLoading } = props;

        if (!isFormulationLoading) {
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

        if (!formulations.length || !activeQuestionId) {
            return null;
        }

        const answers = formulations[formulations.length - 1].answers;

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

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 65 : -200;

    return (
        <MainComponent>
            <View style={ styles.Chat }>
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
                            { renderInputField() }
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
            {/* <ChatModal
              isVisible={ isSuccessPopupVisible }
            /> */}
        </MainComponent>
    );
};

export default ChatComponent;