import React, { useState } from "react";
import {
    FlatList,
    Modal,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./Notes.style";
import EditNoteModal from "../../EditNoteModal";
import Swipeout from 'react-native-swipeout';
import MainComponent from "../../Main/Main.component";
import { colorGreen, darkGreen, skyBlue } from '../../../constants/Colors';

import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';

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

    const Item = ({ title, content, id, timestamps }) => {
        return (
            <Swipeout
                right={ swipeButtons(id) }
                style={ styles.wrapper }
            >
                <View>
                    <TouchableOpacity onPress={ () => openSingleItem(title, content, id) }>
                        <View style={ styles.title }>
                            <View style={{ position: 'absolute', left: '50%', transform: [{rotateZ: '60deg'}], }}>
                                <View style={{ width: 10, height: 10, backgroundColor: skyBlue, borderWidth: 1, borderRadius: 10, top: 20}} />
                                <MaterialIcons style={{ top: -10, right: 10}} name="push-pin" size={30} color={ darkGreen } />
                            </View>
                            <View>
                                <Text style={{ color: '#ff001d', fontSize: 12, marginBottom: 15 }}>
                                    { moment(timestamps).fromNow()}
                                </Text>
                                <Text style={{ color: 'darkGreen', fontSize: 16, fontWeight: 'bold', marginBottom: 15 }}>
                                    {title}
                                </Text>
                            </View>
                            <View>
                                <Text style={{ textAlign: 'right', fontSize: 16, color: '#ff001d'}}>
                                    View note...
                                </Text>
                            </View>
                        </View>

                    </TouchableOpacity>
                </View>
            </Swipeout>
        );
    }

    const renderItem = ({ item }) => {
        const { data: { title, content, timestamps }, id } = item;

        return (
            <Item
              title={ title }
              content={ content }
              id={ id }
              timestamps={ timestamps }
            />
        );
    }

    function isDisabled() {
        return noteContent === '' || noteTitle === '';
    }

    return (
        <MainComponent>
            <SafeAreaView>
                <FlatList
                    data={ noteData }
                    renderItem={ renderItem }
                    keyExtractor={({id}) => id }
                />
                <Modal animationType="slide" transparent  visible={ isModalVisible }>
                    <View style={ styles.modalContainer }>
                        <View style={{ ...styles.modalHeader, backgroundColor: skyBlue}} >
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
                                placeholderTextColor="rgba(255,255,255,.5)"
                                onChangeText={(text) => setNoteTitle(text) }
                                value={ noteTitle }
                            />
                            <TextInput
                                placeholder="Note"
                                placeholderTextColor="rgba(255,255,255,.5)"
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
        </MainComponent>
    );
}

export default NotesComponent;