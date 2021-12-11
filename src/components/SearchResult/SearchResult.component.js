import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { styles } from './SearchResults.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const SearchResultComponent = ({
    data,
    onResultClick,
}) => {
  if (!data || !data.length) {
    return null
  }

  function renderCard(item) {
    const { id: qstId, data: { name, tabId } } = item;

    return (
      <TouchableOpacity
        activeOpacity={ .9 }
        onPress={ () => onResultClick(tabId, qstId) }
        style={ styles.singleItem }
    >
        <Text style={ styles.title }>{ name }</Text>
      </TouchableOpacity>
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