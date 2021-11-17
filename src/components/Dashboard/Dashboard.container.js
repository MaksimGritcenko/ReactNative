import React, {useEffect} from "react";
import { connect } from "react-redux";

import DashboardComponent from "./Dashboard.component";
import { updateModalVisibility } from "../../store/ChatModal/ChatModal.action";
import { updateNotesModalVisibility } from "../../store/Notes/Notes.action";
import {deleteImage, setIsActiveAddImageModal, updateImageInStorage} from "../../store/Images/Images.action";

export const mapStateToProps = (state) => ({
    isVisible: state.ChatModalReducer.isVisible,
    isEditModalVisible: state.NotesReducer.isEditModalVisible,
    language: state.UserReducer.language,
    imageUrlArr: state.ImagesReducer.imageUrlArr
});

export const mapDispatchToProps = (dispatch) => ({
    updateModalVisibility: status => dispatch(updateModalVisibility(status)),
    updateNotesModalVisibility: isVisible => dispatch(updateNotesModalVisibility(isVisible)),
    setIsActiveAddImageModal: isOpened => dispatch(setIsActiveAddImageModal(isOpened)),
});

export const DashboardContainer = (props) => {

    const {
        updateModalVisibility,
        isVisible,
        updateNotesModalVisibility,
        isEditModalVisible,
        language,
        setIsActiveAddImageModal,
        imageUrlArr,
    } = props;

    const toggle = () => {
        updateModalVisibility(false)
    }

    function showNotesModal() {
        updateNotesModalVisibility(true);
    }

    function showAddImageModal() {
        setIsActiveAddImageModal(true)
    }

    return (
        <DashboardComponent
            toggle={ toggle }
            updateModalVisibility={ updateModalVisibility }
            isVisible={ isVisible }
            showNotesModal={ showNotesModal }
            isEditModalVisible={ isEditModalVisible }
            language={ language }
            showAddImageModal={ showAddImageModal }
            imageUriArray={ imageUrlArr }
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);