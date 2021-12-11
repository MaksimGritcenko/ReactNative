import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { connect } from 'react-redux';

import LV from '../../utils/Translations/lv.json';

import { getChatQuestionsForChain } from '../../store/Chat/Chat.dispatcher';

import SearchResult from './SearchResult.component';

export const mapStateToProps = () => ({
});

export const mapDispatchToProps = (dispatch) => ({
    getChatQuestionsForChain: (tabId, qstId, adminId) => getChatQuestionsForChain(dispatch, tabId, qstId, adminId)
});

export const SearchResultContainer = (props) => {
  const { getChatQuestionsForChain, language } = props;

  const navigation = useNavigation();

  function getLanguage() {
    return language === 'lv';
  }

  function onResultClick(tabId, qstId) {
    getChatQuestionsForChain(tabId, qstId)
    redirectToChat();
  }

  function redirectToChat() {
    navigation.jumpTo(getLanguage() ? LV.NavigationChatTitle : 'Chat')
  }

  const containerFunctions = {
    onResultClick
  }

  return (
    <SearchResult
      { ...props }
      { ...containerFunctions }
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer);