import React, { useState } from "react";
import {
    FlatList,
    Modal,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';

import { AntDesign } from '@expo/vector-icons';
import { styles } from "./Notes.style";
import EditNoteModal from "../../EditNoteModal";
import Swipeout from 'react-native-swipeout';
import { darkBlue, lightGray, placeholderTextColor } from '../../../constants/Colors';

import moment from 'moment';
import { LogoComponent } from "../../Logo/Logo.component";

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
                    <TouchableOpacity activeOpacity={ .8 } onPress={ () => openSingleItem(title, content, id) }>
                        <View style={ styles.title }>
                            <View>
                                <Text style={{ color: '#ff001d', fontSize: 12, marginBottom: 15 }}>
                                    { moment(timestamps).fromNow()}
                                </Text>
                                <Text
                                  numberOfLines={ 2 }
                                  style={{ color: darkBlue, fontSize: 16, fontWeight: 'bold', marginBottom: 15 }}
                                >
                                    { title }
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

        <View style={ styles.container }>
            <LogoComponent />
            <FlatList
                data={ noteData }
                showsVerticalScrollIndicator={ false }
                renderItem={ renderItem }
                keyExtractor={({id}) => id }
            />
            <GestureRecognizer
              style={{ flex: 1 }}
              onSwipeDown={ () => closeNotesModal() }
            >
                <Modal
                    animationType="slide"
                    transparent
                    visible={ isModalVisible }
                    statusBarTranslucent={ true }
                >
                    <View style={ {
                        ...styles.modalContainer,
                        paddingTop: Platform.OS === 'ios' ? 21 : 40
                    } }>
                        <View style={{ ...styles.modalHeader, backgroundColor: '#123246' }} >
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
                                placeholder="Title"
                                placeholderTextColor={ placeholderTextColor }
                                onChangeText={(text) => setNoteTitle(text) }
                                value={ noteTitle }
                            />
                            <TextInput
                                placeholder="Note"
                                placeholderTextColor={ placeholderTextColor }
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
                                style={ { ...styles.saveButton, backgroundColor: isDisabled() ? 'lightgray' : '#09507E'} }
                            >
                                <Text
                                style={ {
                                    ...styles.saveButtonText,
                                    color: isDisabled() ? darkBlue : lightGray
                                } }
                                >
                                    Save
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
            <EditNoteModal
                title={ title }
                content={ content }
                modalHeaderStyles={ styles.modalHeader }
                editableItemId={ editableItemId }
            />
        </View>
    );
}

export default NotesComponent;