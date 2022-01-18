import React from 'react';
import { View, FlatList } from 'react-native';
import Highlight from '../Highlights/Highlights.container'

import { styles } from "./InfiniteHints.styles";

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
            onEndReached={() => {}}
            renderItem={({ item }) => {
                return(
                    <View style={styles.item}>
                        <Highlight hit={item} query={ query } />
                    </View>
                )
            }}
            style={{ marginBottom: 20 }}
        />
    );
}

export default InfiniteHits;