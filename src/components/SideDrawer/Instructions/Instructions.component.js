import React from "react";

import { ScrollView, useWindowDimensions, View } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { styles } from './Instructions.style';
import LogoComponent from "../../Logo/Logo.component";

export const InstructionsComponent = ({ content }) => {
    const { width } = useWindowDimensions();

    const source = {
        html: content
    }

    return (
            <View style={ styles.InstructionsWrapper }>
                <LogoComponent />
                <View style={ styles.InnerInstructionsWrapper }>
                    <ScrollView>
                        <View style={ styles.Instructions }>
                            <RenderHtml source={ source } contentWidth={ width } baseStyle={{ color: '#000'}} />
                        </View>
                    </ScrollView>
                </View>
            </View>
    );
}

export default InstructionsComponent;