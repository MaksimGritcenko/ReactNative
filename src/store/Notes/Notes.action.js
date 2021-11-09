export const UPDATE_NOTES_MODAL_VISIBILITY = 'UPDATE_NOTES_MODAL_VISIBILITY';
export const UPDATE_EDIT_NOTE_MODAL_VISIBILITY = 'UPDATE_EDIT_NOTE_MODAL_VISIBILITY';
export const UPDATE_NOTES = 'UPDATE_NOTES';

export const updateNotesModalVisibility = (isVisible) => ({
    type: UPDATE_NOTES_MODAL_VISIBILITY,
    isVisible
});

export const updateEditNoteModalVisibility = (isEditModalVisible) => ({
    type: UPDATE_EDIT_NOTE_MODAL_VISIBILITY,
    isEditModalVisible
});

export const updateNotes = (data) => ({
    type: UPDATE_NOTES,
    data
});
