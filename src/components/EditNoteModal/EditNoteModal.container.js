import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import EditNoteModalComponent from "./EditNoteModal.component";
import {updateEditNoteModalVisibility, updateNotes} from "../../store/Notes/Notes.action";
import {addOrUpdateDoc, getCollectionDocs} from "../../utils/Query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase";

export const mapStateToProps = state => ({
    isEditModalVisible: state.NotesReducer.isEditModalVisible,
    notesData: state.NotesReducer.data
});

export const mapDispatchToProps = (dispatch) => ({
    updateEditNoteModalVisibility: isEditModalVisible => dispatch(updateEditNoteModalVisibility(isEditModalVisible)),
    updateNotes: data => dispatch(updateNotes(data))
})

export const EditNoteModalContainer = (props) => {
    async function closeEditNotesModal(headerTitle, notesEditContent) {
        const {
            updateEditNoteModalVisibility,
            editableItemId,
            updateNotes
        } = props;

        const uid = await AsyncStorage.getItem('@uid');
        const updateNotePath = `/customers/${uid}/customerNotes/${editableItemId}`
        const getNotesOnUpdatePath = `/customers/${uid}/customerNotes/`

        const data = {
            title: headerTitle,
            content: notesEditContent,
            timestamps: new Date().getTime()
        }

        await addOrUpdateDoc(updateNotePath, data);

        const notes = await getCollectionDocs(getNotesOnUpdatePath);

        updateNotes(notes)

        updateEditNoteModalVisibility(false);
    }

    return(
        <EditNoteModalComponent
            { ...props }
            closeEditNotesModal={ closeEditNotesModal }
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteModalContainer);