import React from "react";

import MainComponent from "../../Main/Main.component";
import {useWindowDimensions, View} from 'react-native';
import RenderHtml from 'react-native-render-html';

export const InstructionsComponent = ({ content }) => {
    const { width } = useWindowDimensions();

    const source = {
        html: content
    }

    return (
        <MainComponent>
            <View style={{ flex: 1, padding: 20, alignItems: 'center' }} >
                <RenderHtml source={ source } contentWidth={ width } />
            </View>
        </MainComponent>
    );
}

export default InstructionsComponent;