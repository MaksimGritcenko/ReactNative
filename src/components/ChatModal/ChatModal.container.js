import React from "react";
import { connect } from 'react-redux';

import ChatModal from './ChatModal.component';

export const mapStateToProps = (state) => ({
});

export const mapDispatchToProps = (dispatch) => ({
});

export const ChatModalContainer = (props) => {

    const containerProps = () => ({
        ...props
    })

    return (
        <ChatModal
          { ...containerProps() }
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatModalContainer);