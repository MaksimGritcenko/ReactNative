import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import NotesComponent from "./Notes.component";
import {
    updateEditNoteModalVisibility, updateNotes,
    updateNotesModalVisibility
} from "../../../store/Notes/Notes.action";
import { addDocWithAutoId, getCollectionDocs, deleteDocByPath } from "../../../utils/Query";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const mapStateToProps = state => ({
    isModalVisible: state.NotesReducer.isModalVisible,
    noteData: state.NotesReducer.data
})

export const mapDispatchToProps = (dispatch) => ({
    updateNotesModalVisibility: isVisible => dispatch(updateNotesModalVisibility(isVisible)),
    updateEditNoteModalVisibility: isEditModalVisible => dispatch(updateEditNoteModalVisibility(isEditModalVisible)),
    updateNotes: data => dispatch(updateNotes(data))
})

export const NotesContainer = (props) => {
    const { isModalVisible, noteData } = props;

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [callsQTY, setCallsQTY] = useState(0);
    const [editableItemId, setEditableItemId] = useState(null)

    useEffect(async () => {
        const { updateNotes } = props;

        const uid = await AsyncStorage.getItem('@uid');
        const path = `/customers/${uid}/customerNotes/`
        const notes = await getCollectionDocs(path);

        updateNotes(notes);
    }, [callsQTY])


    function closeNotesModal() {
        const { updateNotesModalVisibility } = props;
        updateNotesModalVisibility(false)

    }

    function openSingleItem(title, content, id) {
        const { updateEditNoteModalVisibility } = props;

        setTitle(title)
        setContent(content)
        setEditableItemId(id)

        updateEditNoteModalVisibility(true)
    }

    async function saveNote(noteTitle, noteContent) {
        const { updateNotesModalVisibility, updateNotes } = props;
        const uid = await AsyncStorage.getItem('@uid');

        updateNotesModalVisibility(false)
        const data = {
            title: noteTitle,
            content: noteContent,
            timestamps: new Date().getTime()
        }

        const path = `/customers/${uid}/customerNotes/`

        await addDocWithAutoId(path, data);

        setCallsQTY(callsQTY + 1)
        const notes = await getCollectionDocs(path);
        updateNotes(notes)
    }

    async function onDeleteNotePress(id) {
        const uid = await AsyncStorage.getItem('@uid');
        const path = `/customers/${uid}/customerNotes/${id}`
        await deleteDocByPath(path);

        setCallsQTY(callsQTY + 1)
    }

    return (
        <NotesComponent
            isModalVisible={ isModalVisible }
            closeNotesModal={ closeNotesModal }
            openSingleItem={ openSingleItem }
            title={ title }
            content={ content }
            saveNote={ saveNote }
            noteData={ noteData }
            onDeleteNotePress={ onDeleteNotePress }
            editableItemId={ editableItemId }
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);

