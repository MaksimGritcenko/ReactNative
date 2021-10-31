import React from "react";
import { connect } from "react-redux";

import ChatButtonComponent from "./ChatButton.component";
import { updateModalVisibility } from "../../store/ChatModal/ChatModal.action";

export const mapDispatchToProps = (dispatch) => ({
    updateModalVisibility: status => dispatch(updateModalVisibility(status))
})
export const ChatButtonContainer = (props) => {
    const { updateModalVisibility } = props;

    const toggle = () => {
        updateModalVisibility(true)
    }

    return (
        <ChatButtonComponent
            toggle={ toggle }
        />
    )
}

export default connect(null, mapDispatchToProps)(ChatButtonContainer)