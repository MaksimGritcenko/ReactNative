import React, { useState } from 'react';
import { View } from 'react-native';
import algoliasearch from 'algoliasearch/lite';

import SearchBox from "../../components/Searchbox/Searchbox.component";
import InfiniteHits from "../../components/InfiniteHits/InfiniteHits.component";

const searchClient = algoliasearch(
    'B9DIM6R7DB',
    'eb925579bcd9ea5c216cd8aec6a6a99e'
);

const index = searchClient.initIndex('questions');

const HomeComponent = () => {
    const [query, setQuery] = useState('');
    const [hits, setHits] = useState([]);

    function onSearch() {
        if (query && query.trim()) {

            index.search(query)
                .then(({ hits }) => {
                    setHits(hits);
                }
            );
        }
    }

    return (
        <View style={{
            paddingTop: 100,
            flex: 1
        }}>
            <SearchBox
                query={ query }
                setQuery={ setQuery }
                onSearch={ onSearch }
            />
            <InfiniteHits query={ query } hits={ hits } />
        </View>
    );
}

export default HomeComponent;
