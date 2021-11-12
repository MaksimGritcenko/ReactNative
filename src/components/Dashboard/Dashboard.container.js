import React from "react";
import { connect } from "react-redux";

import DashboardComponent from "./Dashboard.component";
import { updateModalVisibility } from "../../store/ChatModal/ChatModal.action";
import { updateNotesModalVisibility } from "../../store/Notes/Notes.action";

export const mapStateToProps = (state) => ({
    isVisible: state.ChatModalReducer.isVisible,
    isEditModalVisible: state.NotesReducer.isEditModalVisible,
    language: state.UserReducer.language
})

export const mapDispatchToProps = (dispatch) => ({
    updateModalVisibility: status => dispatch(updateModalVisibility(status)),
    updateNotesModalVisibility: isVisible => dispatch(updateNotesModalVisibility(isVisible))
})

export const DashboardContainer = (props) => {
    const {
        updateModalVisibility,
        isVisible,
        updateNotesModalVisibility,
        isEditModalVisible,
        language
    } = props;

    const toggle = () => {
        updateModalVisibility(false)
    }

    function showNotesModal() {
        updateNotesModalVisibility(true);
    }

    return (
        <DashboardComponent
            toggle={ toggle }
            updateModalVisibility={ updateModalVisibility }
            isVisible={ isVisible }
            showNotesModal={ showNotesModal }
            isEditModalVisible={ isEditModalVisible }
            language={ language }
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);