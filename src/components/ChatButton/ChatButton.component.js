import React  from "react";

import {Image, Pressable, Text, View} from "react-native";
import ChatButtonIcon from './icon/chatButton.png';

import { styles } from "./ChatButton.styles";

export const ChatButtonComponent = (props) => {
    const { toggle } = props;

    return (
        <View style={ styles.container}>
            <Pressable onPress={ toggle }>
                <Image style={ styles.image } source={ ChatButtonIcon } />
            </Pressable>
        </View>
    );
}

export default ChatButtonComponent;