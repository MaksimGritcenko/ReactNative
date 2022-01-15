import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 16,
    },
    input: {
        width: '90%',
        height: 48,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    searchBtn: {
        bottom: 1,
        zIndex: 9999,

    }
});

const SearchBox = ({
    query,
    setQuery,
    onSearch
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={value => setQuery(value)}
                value={ query }
                placeholder="Start chat"
            />
            <TouchableOpacity
              style={ styles.searchBtn }
              onPress={ onSearch }
            >
                <SimpleLineIcons name="magnifier" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
};

SearchBox.propTypes = {
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
};

export default SearchBox;
