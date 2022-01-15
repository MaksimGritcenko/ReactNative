import React from 'react';
import { View, Text } from 'react-native';
import { connectHighlight } from 'react-instantsearch-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Highlight = (props) => {
    const {
        hit,
        onPress,
        language
    } = props;

    return (
        <View>
            {Object.entries(hit).map((item , index) => {
                const style = {
                    backgroundColor: 'yellow',
                };

                return item.map(({ answer }) => {
                    if (answer) {
                        const regex = /(<\/?)ais-highlight-0000000000(>)/g;
                        const answerVal = answer[language]
                            .value
                            .replaceAll(regex, '');

                        return (
                            <TouchableOpacity
                              onPress={ () => onPress(answerVal) }
                              key={index}
                              style={style}
                            >
                                <Text>
                                    { answerVal }
                                </Text>
                            </TouchableOpacity>
                        );
                    }
                })
            })}
        </View>
    );
};

export default connectHighlight(Highlight);