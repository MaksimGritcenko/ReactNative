import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Highlight from '../Highlights/Highlights.container'

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    item: {
        padding: 10,
        flexDirection: 'column',
    },
});

const InfiniteHits = ({
    hits,
    query
}) => {
    if (
        !hits.length
        || !hits[0]
    ) {
        return null;
    }

    return(
        <FlatList
            data={ hits }
            keyExtractor={item => item.objectID}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            onEndReached={() => {}}
            renderItem={({ item }) => {
                return(
                    <View style={styles.item}>
                        <Highlight hit={item} query={ query } />
                    </View>
                )
            }}
        />
    );
}

export default InfiniteHits;