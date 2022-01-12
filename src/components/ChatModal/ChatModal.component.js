import React from "react";
import {
    Text,
    View,
    Animated,
    PanResponder,
    ScrollView
} from "react-native";

import { getScreenHeight, getScreenWidth } from "../../utils/Window";

import { styles } from './ChatModal.styles';

export const ChatModal = (props) => {

    const MODAL_HEIGHT = 300;
    const MODAL_DRAG_BREAKPOINT = 200;

    const animation = new Animated.ValueXY({ x: 0, y: -getScreenHeight() + 100});
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (e, state) => {
            animation.extractOffset();
        },
        onPanResponderMove: (e, state) => {

            animation.setValue({ x: 0, y: state.dy });
        },
        onPanResponderRelease: (e, state) => {
            if (state.moveY > MODAL_DRAG_BREAKPOINT) {
                console.log(MODAL_HEIGHT);
                Animated.spring(animation.y, {
                    toValue: MODAL_HEIGHT,
                    // tension: 1,
                    useNativeDriver: true
                }).start();
            }
        },
    })

    const animatedHeight = {
        transform: animation.getTranslateTransform()
    }

    const animatedOpacity = animation.y.interpolate({
        inputRange: [-getScreenHeight(), -getScreenHeight() + 250],
        outputRange: [.3, 1],
        extrapolate: "clamp",
    })

    return (
        <Animated.View
          { ...panResponder.panHandlers }
          style={ {
              ...styles.ChatModal,
              ...animatedHeight,
              opacity: animatedOpacity,
            } }
        >
        </Animated.View>
    );
};

export default ChatModal;