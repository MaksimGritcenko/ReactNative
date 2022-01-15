import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Highlight from '../Highlights/Highlights.container'
import { connectInfiniteHits } from 'react-instantsearch-native';

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    item: {
        padding: 10,
        flexDirection: 'column',
    },
    titleText: {
        fontWeight: 'bold',
    },
});

const InfiniteHits = ({ hits, hasMore, refine, query }) => {
    if (!hits.length || !hits[0]) {
        return null;
    }

    return(
        <FlatList
            data={ hits }
            keyExtractor={item => item.objectID}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            onEndReached={() => hasMore && refine()}
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

export default connectInfiniteHits(InfiniteHits);