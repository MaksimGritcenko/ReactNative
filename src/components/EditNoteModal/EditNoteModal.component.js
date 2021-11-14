import React, {useState} from "react";
import {
    Modal,
    View,
    TouchableOpacity,
    TextInput
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./EditNoteModal.styles";
import { darkGreen } from "../../constants/Colors";

export const EditNoteModalComponent = (props) => {
    const {
        title,
        content,
        isEditModalVisible,
        modalHeaderStyles,
        closeEditNotesModal,
        onRequestClose
    } = props;
    const [headerTitle, setHeaderTitle] = useState(title);
    const [notesEditContent, setNotesEditContent] = useState(content);

    function isTitleOrContentChanged() {
        return (title === headerTitle && content === notesEditContent)
            || headerTitle === ''
            || notesEditContent === '';
    }

    return (
        <Modal
            animationType="slide"
            transparent
            visible={ isEditModalVisible }
            onRequestClose={() => onRequestClose()}
        >
                <View style={{ ...modalHeaderStyles, backgroundColor: darkGreen } }>
                    <View style={ styles.headerRight }>
                        <TextInput
                            style={{ width: '70%', color: '#fff', fontSize: 20}}
                            multiline
                            defaultValue={ title }
                            onChangeText={(text) => setHeaderTitle(text.trim())}
                        />
                    </View>
                    <TouchableOpacity>
                        { !isTitleOrContentChanged() && (
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
                        { isTitleOrContentChanged() && (
                            <AntDesign
                                name="closecircleo"
                                size={ 24 }
                                color="#fff"
                                onPress={ () => onRequestClose() }
                            />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={ styles.container }>
                    <TextInput
                        style={ styles.textInput }
                        multiline
                        defaultValue={ content }
                        onChangeText={(text) => setNotesEditContent(text.trim())}
                    />
                </View>
        </Modal>
    );
};

export default EditNoteModalComponent;