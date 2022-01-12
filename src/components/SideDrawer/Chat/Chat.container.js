import React from "react";
import { connect } from 'react-redux';

import ChatComponent from './Chat.component';

export const mapStateToProps = (state) => ({});

export const mapDispatchToProps = (dispatch) => ({});

export const ChatComponentContainer = (props) => {
    return (
        <ChatComponent
         { ...props }
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponentContainer);