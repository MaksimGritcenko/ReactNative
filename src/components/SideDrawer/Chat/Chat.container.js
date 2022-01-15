import React from "react";
import { connect } from 'react-redux';

import { pushChatMessage } from '../../../store/Chat/Chat.action';
import ChatComponent from './Chat.component';

export const mapStateToProps = (state) => ({
    chatMessages: state.ChatReducer.chatMessages,
    language: state.UserReducer.language,
});

export const mapDispatchToProps = (dispatch) => ({
    pushChatMessage: (messageObj) => dispatch(pushChatMessage(messageObj))
});

export const ChatComponentContainer = (props) => {
    return (
        <ChatComponent
         { ...props }
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponentContainer);