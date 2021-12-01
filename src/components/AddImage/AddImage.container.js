import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

import AddImageComponent from "./AddImage.component";
import {setIsActiveAddImageModal, updateImageInStorage} from "../../store/Images/Images.action";
import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export const mapStateToProps = state => ({
    isOpened: state.ImagesReducer.isOpened,
    imageUrlArr: state.ImagesReducer.imageUriArray
});

export const mapDispatchToProps = (dispatch) => ({
    setIsActiveAddImageModal: isOpened => dispatch(setIsActiveAddImageModal(isOpened)),
    updateImageInStorage: imageUri => dispatch(updateImageInStorage(imageUri))
});

export const AddImageContainer = (props) => {
    const { isOpened, setIsActiveAddImageModal } = props;

    const [hasPermissions, setHasPermissions] = useState(false);

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
               const { status } = await Camera.requestCameraPermissionsAsync();
               setHasPermissions(status === 'granted');
            }
        })();
    }, [])

    const pickImage = async () => {
        if (!hasPermissions) {
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (status !== 'granted') return Alert.alert('Permissions', 'Turn on permissions to continue');

            setHasPermissions(status === 'granted');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3,4],
            quality: 1
        });

        if (result.cancelled) {
            setIsActiveAddImageModal(false)
        }

        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    function closeAddImagesModal() {
        const { updateImageInStorage } = props;

        if (!image) return setIsActiveAddImageModal(false);

        updateImageInStorage(image)

        setImage(null);
        setIsActiveAddImageModal(false)
    }

    function onRequestClose() {
        setIsActiveAddImageModal(false)
    }

    return (
        <AddImageComponent
            isOpened={ isOpened }
            closeAddImagesModal={ closeAddImagesModal }
            pickImage={ pickImage }
            image={ image }
            onRequestClose={ onRequestClose }
        />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddImageContainer);