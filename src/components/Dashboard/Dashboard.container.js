import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

import DashboardComponent from "./Dashboard.component";
import { updateModalVisibility } from "../../store/ChatModal/ChatModal.action";
import { updateNotesModalVisibility } from "../../store/Notes/Notes.action";
import { setIsActiveAddImageModal } from "../../store/Images/Images.action";
import { getCollectionDocsWithoutOrder } from "../../utils/Query";
import { setExpoTokens } from "../../store/PushNotifications/PushNotifications.action";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    setPushTokens: tokens => dispatch(setExpoTokens(tokens))
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
        setPushTokens
    } = props;

    const [admin, setAdmin] = useState(false);

    useEffect(async () => {
        const tokens = await getCollectionDocsWithoutOrder('/expoTokensForPushNotifications')
        const emailFromAsyncStorage = await AsyncStorage.getItem('@email');

        if (emailFromAsyncStorage === 'admin@admin.com') setAdmin(true)
        setPushTokens(tokens)
    }, [])

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
            admin={ admin }
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);