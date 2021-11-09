import React, {useState} from "react";
import {
    Modal,
    View,
    Text, TouchableOpacity, TextInput
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { styles } from "./EditNoteModal.styles";

export const EditNoteModalComponent = (props) => {
    const {
        title,
        content,
        isEditModalVisible,
        modalHeaderStyles,
        closeEditNotesModal
    } = props;
    const [headerTitle, setHeaderTitle] = useState('');
    const [notesEditContent, setNotesEditContent] = useState('');

    return (
        <Modal animationType="slide" transparent={ false } visible={ isEditModalVisible }>
            <View style={{ ...modalHeaderStyles } }>
                <View style={ styles.headerRight }>
                        <TextInput
                            style={{ width: '70%', color: '#fff', fontSize: 20}}
                            multiline
                            defaultValue={ title }
                            onChangeText={(text) => setHeaderTitle(text)}
                        />
                </View>
                <TouchableOpacity>
                    <AntDesign
                        name="check"
                        size={ 24 }
                        color="#fff"
                        onPress={ () => closeEditNotesModal(headerTitle, notesEditContent) }
                    />
                </TouchableOpacity>
            </View>
            <View style={ styles.container }>
                <TextInput
                    style={ styles.textInput }
                    multiline
                    defaultValue={ content }
                    onChangeText={(text) => setNotesEditContent(text)}
                />
            </View>
        </Modal>
    );
};

export default EditNoteModalComponent;