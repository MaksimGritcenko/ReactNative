import {
    UPDATE_NOTES_MODAL_VISIBILITY,
    UPDATE_EDIT_NOTE_MODAL_VISIBILITY,
    UPDATE_NOTES
} from "./Notes.action";

export const getInitialState = () => ({
    isModalVisible: false,
    isEditModalVisible: false,
    data: null
});

export const NotesReducer = (
    state = getInitialState(),
    action
) => {
    switch (action.type) {
        case UPDATE_NOTES_MODAL_VISIBILITY:
            const { isVisible } = action;

            return {
                ...state,
                isModalVisible: isVisible
            };

        case UPDATE_EDIT_NOTE_MODAL_VISIBILITY:
            const { isEditModalVisible } = action;

            return {
                ...state,
                isEditModalVisible
            };

        case UPDATE_NOTES:
            const { data } = action;

            return {
                ...state,
                data
            };

        default:
            return state;
    }
}

export default NotesReducer;