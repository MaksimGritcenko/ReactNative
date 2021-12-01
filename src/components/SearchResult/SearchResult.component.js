import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles } from './SearchResults.styles';

export const SearchResultComponent = ({ data }) => {
  if (!data) {
    return null
  }

  function renderCard(item) {
    const { name, details } = item;

    return (
      <View style={ styles.singleItem }>
        <Text style={ styles.title }>name: { name }</Text>
        <Text style={ styles.content }>details: { details }</Text>
      </View>
    )
  }
  return (
    <View
      style={ styles.container }
    >
      <FlatList
        data={ data }
        renderItem={ ({ item }) => renderCard(item)} keyExtractor={ item => item.id }
        showsVerticalScrollIndicator={ false }
      />
    </View>
  );
}

export default SearchResultComponent;