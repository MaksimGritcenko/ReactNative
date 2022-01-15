import React, { useState } from 'react';
import { View } from 'react-native';
import { InstantSearch } from 'react-instantsearch-native';
import SearchBox from "../../components/Searchbox/Searchbox.component";
import InfiniteHits from "../../components/InfiniteHits/InfiniteHits.component";

import { getConditionalSearchQuery } from '../../utils/Search';

const HomeComponent = () => {
    const [query, setQuery] = useState('');

    return (
        <View style={{
            borderWidth: 1,
            paddingTop: 100
        }}>
            <InstantSearch
              indexName="questions"
              searchClient={ getConditionalSearchQuery() }
              searchState={ { query } }
              onSearchStateChange={ ({ query }) => setQuery(query) }
            >
                <SearchBox />
                <InfiniteHits query={ query } />
            </InstantSearch>
        </View>
    );
}

export default HomeComponent;
