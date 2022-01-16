import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Highlight = (props) => {
    const {
        hit,
        onPress,
        language
    } = props;

    const questionVal = hit.question[language];
    const answerVal = hit.answer[language];

    return (
        <View>
            <TouchableOpacity onPress={ () => onPress(questionVal, answerVal) }>
                <Text style={{ fontWeight: 'bold'}}>
                    { questionVal }
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Highlight;