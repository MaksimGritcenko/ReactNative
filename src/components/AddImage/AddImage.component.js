import React from "react";
import {
    Image,
    Modal,
    TouchableOpacity,
    View,
} from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';

import { styles } from "./AddImage.styles";
import { AntDesign, Entypo } from '@expo/vector-icons';
import { darkBlue } from "../../constants/Colors";


export const AddImageComponent = (props) => {
    const {
        isOpened,
        closeAddImagesModal,
        pickImage,
        image,
        onRequestClose
    } = props;

    return (
        <GestureRecognizer
          style={{ flex: 1 }}
          onSwipeDown={ () => onRequestClose() }
        >
            <Modal
                style={{ borderWidth: 1 }}
                animationType="slide"
                transparent={ false } visible={ isOpened }
                onRequestClose={() => onRequestClose() }
                statusBarTranslucent={ true }
            >
                <View style={ { ...styles.container, backgroundColor: darkBlue } }>
                    { image && (
                        <TouchableOpacity style={ styles.saveButton }>
                            <AntDesign
                                name="check"
                                size={ 35 }
                                color='#fff'
                                onPress={ () => closeAddImagesModal() }
                            />
                        </TouchableOpacity>
                    )}
                    { image && <Image style={{ width: '90%', height: '70%'}} source={ { uri: image} } /> }
                    { !image && (
                    <View
                        style={{ ...styles.container, width: '100%', flex: 1}}
                    >
                        <TouchableOpacity style={{ position: "absolute", right: 20, top: 17, zIndex: 10 }}>
                            <AntDesign
                            name="closecircleo"
                            size={24}
                            color="#fff"
                            onPress={ () => closeAddImagesModal() }
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={ .8 } style={ styles.addImageButton } onPress={() => pickImage() }>
                            <Entypo name="plus" size={50} color={ darkBlue } />
                        </TouchableOpacity>
                    </View>
                    )}
                </View>
            </Modal>
        </GestureRecognizer>
        );
}

export default AddImageComponent;