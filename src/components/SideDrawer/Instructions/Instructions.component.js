import React from "react";

import MainComponent from "../../Main/Main.component";
import { ScrollView, useWindowDimensions, View } from 'react-native';
import RenderHtml from 'react-native-render-html';

export const InstructionsComponent = ({ content }) => {
    const { width } = useWindowDimensions();

    const source = {
        html: content
    }

    return (
        <MainComponent>
            <ScrollView>
              <View style={{ flex: 1, padding: 20, alignItems: 'center', borderWidth: 1, backgroundColor: 'rgba(0,0,0, 0.8)' }}>
                <RenderHtml source={ source } contentWidth={ width } baseStyle={{ color: '#fff'}} />
              </View>
            </ScrollView>
        </MainComponent>
    );
}

export default InstructionsComponent;