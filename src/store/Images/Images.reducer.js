import {
    SET_IS_ACTIVE_ADD_IMAGES_MODAL,
    UPDATE_IMAGE_URL_IN_STORAGE,
    DELETE_IMAGE,
    SET_INITIAL_VALUE_TO_ARRAY, UPDATE_IMAGES_ARRAY_AFTER_DELETE
} from "./Images.action";

export const getInitialState = () => ({
    isOpened: false,
    imageUriArray: [],
    imageUrlArr: []
});

export const ImagesReducer = (
    state = getInitialState(),
    action
) => {
    switch (action.type) {
        case SET_IS_ACTIVE_ADD_IMAGES_MODAL:
            const { isOpened } = action;

            return {
                ...state,
                isOpened
            };

        case SET_INITIAL_VALUE_TO_ARRAY:
            const { initial } = action;

            return {
                ...state,
                imageUrlArr: initial
            }

        case UPDATE_IMAGE_URL_IN_STORAGE:
            const { imageUri } = action;

            const imageUrlArr = [ ...state.imageUrlArr, { imageUri }]

            return {
                ...state,
                imageUrlArr
            }

        case UPDATE_IMAGES_ARRAY_AFTER_DELETE:
            const { data } = action;

            return {
                ...state,
                imageUrlArr: data
            }

        default:
            return state;
    }
}

export default ImagesReducer;