import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connectHighlight } from 'react-instantsearch-native';

const Highlight = (props) => {
    const { hit } = props;
    return (
        <View>
            {Object.entries(hit).map((item , index) => {
                const style = {
                    backgroundColor: 'yellow',
                };

                return item.map(({ answer }) => {
                    if (answer) {
                        return (
                            <Text key={index} style={style}>
                                {answer.en.value}
                            </Text>
                        );
                    }
                })
            })}
        </View>
    );
};

Highlight.propTypes = {
    hit: PropTypes.object.isRequired,
    highlight: PropTypes.func.isRequired,
};

export default connectHighlight(Highlight);