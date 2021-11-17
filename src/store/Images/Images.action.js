export const SET_IS_ACTIVE_ADD_IMAGES_MODAL = 'SET_IS_ACTIVE_ADD_IMAGES_MODAL';
export const UPDATE_IMAGE_URL_IN_STORAGE = 'UPDATE_IMAGE_IN_STORAGE';
export const DELETE_IMAGE = 'DELETE_IMAGE';
export const SET_INITIAL_VALUE_TO_ARRAY = 'SET_INITIAL_VALUE_TO_ARRAY';
export const UPDATE_IMAGES_ARRAY_AFTER_DELETE = 'UPDATE_IMAGES_ARRAY_AFTER_DELETE';

export const setIsActiveAddImageModal = isOpened => ({
    type: SET_IS_ACTIVE_ADD_IMAGES_MODAL,
    isOpened
});

export const updateImageInStorage = imageUri => ({
    type: UPDATE_IMAGE_URL_IN_STORAGE,
    imageUri
});

export const deleteImage = index => ({
    type: DELETE_IMAGE,
    index
});

export const setInitialValueInArray = initial => ({
    type: SET_INITIAL_VALUE_TO_ARRAY,
    initial
});

export const updateImagesArrayAfterDelete = data => ({
    type: UPDATE_IMAGES_ARRAY_AFTER_DELETE,
    data
});