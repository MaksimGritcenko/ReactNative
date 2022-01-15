import React from "react";
import { connect } from 'react-redux';

import { pushChatMessage, deleteMessage } from '../../../store/Chat/Chat.action';
import ChatComponent from './Chat.component';

export const mapStateToProps = (state) => ({
    chatMessages: state.ChatReducer.chatMessages,
    language: state.UserReducer.language,
});

export const mapDispatchToProps = (dispatch) => ({
    pushChatMessage: (messageObj) => dispatch(pushChatMessage(messageObj)),
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId))
});

export const ChatComponentContainer = (props) => {
    const { deleteMessage } = props;

    function onDelete({ _id }) {
        deleteMessage(_id);
    }

    function onLongPress(context, message) {
        const options = ['copy', 'Delete Message', 'Cancel'];
        const cancelButtonIndex = options.length - 1;

        context.actionSheet().showActionSheetWithOptions({
            options,
            cancelButtonIndex
        }, (buttonIndex) => {
            switch (buttonIndex) {
                case 0:
                    Clipboard.setString(message.text);
                    break;
                case 1:
                    onDelete(message);
                    break;
            }
        });
    }

    const containerFunctions = {
        onLongPress
    };

    return (
        <ChatComponent
          { ...props }
          { ...containerFunctions }
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponentContainer);