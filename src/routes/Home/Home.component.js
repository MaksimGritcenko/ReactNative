import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TextInput } from 'react-native';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, connectSearchBox } from 'react-instantsearch-native';
import RefinementListComponent from "../../components/RefinementList/RefinementList.component";
import SearchBox from "../../components/Searchbox/Searchbox.component";
import InfiniteHits from "../../components/InfiniteHits/InfiniteHits.component";

const searchClient = algoliasearch(
    'B9DIM6R7DB', // app ID
    'eb925579bcd9ea5c216cd8aec6a6a99e' // app key
);
const HomeComponent = () => {
    return (
        <View style={{ borderWidth: 1, paddingTop: 100}}>
            <InstantSearch
                appId=""
                apiKey=""
                indexName="questions"
                searchClient={searchClient}
            >
                <SearchBox />
                {/*<RefinementListComponent limit={ 5 } />*/}
                <InfiniteHits />
            </InstantSearch>
        </View>
    );
}

export default HomeComponent;


//
// class SearchBox extends Component {
//
//   render() {
//       console.log(this.props)
//     return (
//       <View style={{ paddingTop: 20, borderWidth: 1 }}>
//         <TextInput
//           onChangeText={text => this.props.refine(text)}
//           value={this.props.currentRefinement}
//           placeholder={'Search a product...'}
//           clearButtonMode={'always'}
//           spellCheck={false}
//           autoCorrect={false}
//           autoCapitalize={'none'}
//           style={{ borderWidth: 2 }}
//
//         />
//       </View>
//     );
//   }
// }
//
// SearchBox.propTypes = {
//   refine: PropTypes.func.isRequired,
//   currentRefinement: PropTypes.string,
// };
//
// const ConnectedSearchBox = connectSearchBox(SearchBox);
//
// class MyApp extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <View
//         style={{
//           alignItems: 'center',
//           flexDirection: 'column',
//           paddingTop: 120,
//         }}
//       >
//         <InstantSearch searchClient={searchClient} indexName="questions">
//           <ConnectedSearchBox />
//         </InstantSearch>
//       </View>
//     );
//   }
// }
//
// export default MyApp;