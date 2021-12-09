import React from "react";

import MainComponent from "../../Main/Main.component";
import { ScrollView, useWindowDimensions, View } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { styles } from './Instructions.style';

export const InstructionsComponent = ({ content }) => {
    const { width } = useWindowDimensions();

    const source = {
        html: content
    }

    return (
        <MainComponent>
            <View style={ styles.InstructionsWrapper }>
                <View style={ styles.InnerInstructionsWrapper }>
                    <ScrollView>
                        <View style={ styles.Instructions }>
                            <RenderHtml source={ source } contentWidth={ width } baseStyle={{ color: '#fff'}} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </MainComponent>
    );
}

export default InstructionsComponent;