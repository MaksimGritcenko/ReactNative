import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Highlight from '../Highlights/Highlights.component'
import PropTypes from 'prop-types';
import { connectInfiniteHits } from 'react-instantsearch-native';

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    item: {
        padding: 50,
        flexDirection: 'column',
    },
    titleText: {
        fontWeight: 'bold',
    },
});

const InfiniteHits = ({ hits, hasMore, refine }) => {
    return(
        <FlatList
            data={hits}
            keyExtractor={item => item.objectID}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            onEndReached={() => hasMore && refine()}
            renderItem={({ item }) => {
                return(
                    <View style={styles.item}>
                        <Highlight hit={item} />
                    </View>
                )
            }}
        />
    );
}

InfiniteHits.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    hasMore: PropTypes.bool.isRequired,
    refine: PropTypes.func.isRequired,
};

export default connectInfiniteHits(InfiniteHits);