import React, {useEffect, useState} from "react";
import {
    Modal,
    View,
    TouchableOpacity,
    TextInput,
    Platform
} from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';

import { AntDesign } from "@expo/vector-icons";
import { styles } from "./EditNoteModal.styles";
import { darkBlue } from "../../constants/Colors";

export const EditNoteModalComponent = (props) => {
    const {
        title,
        content,
        isEditModalVisible,
        modalHeaderStyles,
        closeEditNotesModal,
        onRequestClose
    } = props;


    const [headerTitle, setHeaderTitle] = useState('');
    const [notesEditContent, setNotesEditContent] = useState('');
    const [prevIsEditModalVisible, setPrevIsEditModalVisible] = useState(false);

    useEffect(() => {
        if (!isEditModalVisible) {
            setNotesEditContent('');
            setHeaderTitle('');
            setPrevIsEditModalVisible(isEditModalVisible);
        }

        if (isEditModalVisible && isEditModalVisible !== prevIsEditModalVisible) {
            setNotesEditContent(content);
            setHeaderTitle(title);
            setPrevIsEditModalVisible(isEditModalVisible);
        }
    });

    function isTitleOrContentChanged() {
        return !!headerTitle
            && !!notesEditContent
            && (title !== headerTitle || content !== notesEditContent);
    }

    function onTitleChange(text) {
        setHeaderTitle(text.trim())
    }

    function onNoteTxtChange(text) {
        setNotesEditContent(text.trim())
    }

    return (
        <GestureRecognizer
          style={{ flex: 1 }}
          onSwipeDown={ () => onRequestClose() }
        >
            <Modal
                animationType="slide"
                transparent
                visible={ isEditModalVisible }
                onRequestClose={() => onRequestClose()}
                statusBarTranslucent={ true }
            >
                    <View style={ {
                      ...modalHeaderStyles,
                      backgroundColor: darkBlue,
                      paddingTop: Platform.OS === 'ios' ? 35 : 40
                    } }>
                        <View style={ styles.headerRight }>
                            <TextInput
                                style={{ width: '92%', color: '#fff', fontSize: 20}}
                                multiline
                                defaultValue={ title }
                                onChangeText={ onTitleChange }
                            />
                        </View>
                        <TouchableOpacity>
                            { isTitleOrContentChanged() && (
                                <AntDesign
                                    name="check"
                                    size={ 24 }
                                    color="#fff"
                                    onPress={ () => {
                                        closeEditNotesModal(headerTitle, notesEditContent)
                                        setHeaderTitle('')
                                        setNotesEditContent('')
                                    } }
                                />
                            )}
                            { !isTitleOrContentChanged() && (
                                <AntDesign
                                    name="closecircleo"
                                    size={ 24 }
                                    color="#fff"
                                    onPress={ () => onRequestClose() }
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={ {
                        ...styles.container,
                        paddingTop: Platform.OS === 'ios' ? 15 : 0
                    } }>
                        <TextInput
                            style={ styles.textInput }
                            multiline
                            defaultValue={ content }
                            onChangeText={ onNoteTxtChange }
                        />
                    </View>
            </Modal>
        </GestureRecognizer>
    );
};

export default EditNoteModalComponent;