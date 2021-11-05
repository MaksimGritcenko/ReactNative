import React from "react";
import { connect } from "react-redux";

import DashboardComponent from "./Dashboard.component";
import { updateModalVisibility } from "../../store/ChatModal/ChatModal.action";

export const mapStateToProps = (state) => ({
    isVisible: state.ChatModalReducer.isVisible
})

export const mapDispatchToProps = (dispatch) => ({
    updateModalVisibility: status => dispatch(updateModalVisibility(status))
})

export const DashboardContainer = (props) => {
    const { updateModalVisibility, isVisible } = props;

    const toggle = () => {
        updateModalVisibility(false)
    }

    return (
        <DashboardComponent
            toggle={ toggle }
            updateModalVisibility={ updateModalVisibility }
            isVisible={ isVisible }
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);