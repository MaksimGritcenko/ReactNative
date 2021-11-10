import React, { useState } from "react";
import {
    FlatList, Modal,
    SafeAreaView,
    Text, TextInput, TouchableOpacity,
    View
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./Notes.style";
import EditNoteModal from "../../EditNoteModal";
import Swipeout from 'react-native-swipeout';

export const NotesComponent = ( props ) => {
    const {
        isModalVisible,
        closeNotesModal,
        openSingleItem,
        title,
        content,
        saveNote,
        noteData,
        onDeleteNotePress,
        editableItemId
    } = props;

    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    function swipeButtons(id) {
        return [
            {
                text: 'Delete',
                backgroundColor: 'red',
                onPress: () => onDeleteNotePress(id)
            }
        ]
    }

    const Item = ({ title, content, id }) => {
        return (
            <Swipeout
                right={ swipeButtons(id) }
                style={ styles.wrapper }
            >
                <View>
                    <TouchableOpacity onPress={() => openSingleItem(title, content, id)}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Swipeout>
        );
    }

    const renderItem = ({ item }) => {
        const { data: { title, content }, id } = item;

        return (
            <Item title={ title } content={ content } id={ id } />
        );
    }

    function isDisabled() {
        return noteContent === '' || noteTitle === '';
    }

    return (
        <SafeAreaView style={ styles.container }>
            <FlatList
                data={ noteData }
                renderItem={ renderItem }
                keyExtractor={({id}) => id }
            />
            <Modal animationType="slide" transparent={ false } visible={ isModalVisible }>
                <View style={ styles.modalContainer }>
                    <View style={ styles.modalHeader} >
                        <Text style={{ color: '#fff'}}>New Note</Text>
                        <TouchableOpacity>
                            <AntDesign
                                name="closecircleo"
                                size={24}
                                color="#fff"
                                onPress={ () => closeNotesModal() }
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={ styles.contentWrapper }>
                        <TextInput
                            style={ styles.contentWrapperTitle }
                            multiline
                            placeholder="Title"
                            placeholderTextColor="#fff"
                            onChangeText={(text) => setNoteTitle(text) }
                            value={ noteTitle }
                        />
                        <TextInput
                            placeholder="Note"
                            placeholderTextColor="#fff"
                            style={ styles.contentWrapperContent }
                            multiline
                            onChangeText={(text) => setNoteContent(text) }
                            value={ noteContent }
                        />
                        <TouchableOpacity
                            disabled={ isDisabled() }
                            onPress={() => {
                                saveNote(noteTitle, noteContent)
                                setNoteTitle('');
                                setNoteContent('');
                            }}
                            style={{ ...styles.saveButton, backgroundColor: isDisabled() ? 'lightgray' : '#36394d'} }
                        >
                            <Text style={ styles.saveButtonText }>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <EditNoteModal
                title={ title }
                content={ content }
                modalHeaderStyles={ styles.modalHeader }
                editableItemId={ editableItemId }
            />
        </SafeAreaView>
    );
}

export default NotesComponent;