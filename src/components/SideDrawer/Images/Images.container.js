import React, {useEffect} from "react";
import { connect } from "react-redux";

import ImagesComponent from "./Images.component";
import {
    deleteImage,
    setInitialValueInArray,
    updateImagesArrayAfterDelete
} from "../../../store/Images/Images.action";

export const mapStateToProps = state => ({
    imageUrlArr: state.ImagesReducer.imageUrlArr,
    language: state.UserReducer.language
});

export const mapDispatchToProps = dispatch => ({
    deleteImageFromStorage: index => dispatch(deleteImage(index)),
    setInitialValueInArray: imageUri => dispatch(setInitialValueInArray(imageUri)),
    updateImagesArrayAfterDelete: data => dispatch(updateImagesArrayAfterDelete(data)),
})

export const ImagesContainer = ({ imageUrlArr, updateImagesArrayAfterDelete, setInitialValueInArray, language }) => {
    function deleteImage(imageUrl) {
        const newArr = imageUrlArr.filter(({ imageUri }) => {
            return imageUri !== imageUrl
        })

        updateImagesArrayAfterDelete(newArr);
    }

    useEffect(() => {
        if (!imageUrlArr) {
            setInitialValueInArray([])
        }
    }, [])

    return (
        <ImagesComponent
            language={ language }
            imageUriArray={ imageUrlArr }
            deleteImage={ deleteImage }
        />
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer);