import React, { useState } from 'react';
import {
    Text,
    View,
    Pressable,
    TextInput
} from 'react-native';
import MainComponent from "../../components/Main/Main.component";
import {
    darkBlue,
    placeholderTextColor
} from "../../constants/Colors";

import LV from '../../utils/Translations/lv.json';
import SearchResult from '../../components/SearchResult';

import { styles } from "./Home.styles";

export const HomeComponent = (props) => {
    const {
        logout,
        opacity,
        language,
        searchChatQsts,
        searchResults
    } = props;

    const [searchText, setSearchText] = useState('');
    const [searchData, setSearchData] = useState('');

    function getSearchResults() {
        searchChatQsts();
    }

    return (
        <MainComponent>
            <View style={ styles.HomeWrapper }>
                <View style={ styles.container }>
                    <View style={ styles.searchInput }>
                        <TextInput
                          style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }}
                          placeholder="Search"
                          placeholderTextColor={ placeholderTextColor }
                          onChangeText={ text => setSearchText(text) }
                          onSubmitEditing={() => getSearchResults()}
                        />
                    </View>
                    <SearchResult language={ language } data={ searchResults } />
                </View>
                <View style={{
                    ...styles.logoutButtonWrapper,
                    opacity,
                    borderWidth: 1,
                    borderColor: darkBlue,
                    borderRadius: 20,
                    marginTop: 80
                }}>
                    <View style={ styles.logoutButton }>
                        <Pressable title="Logout" onPress={ logout } >
                            <Text style={ { color: '#fff'}}>{ language === 'lv' ? LV.LogoutButton : "Logout"}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </MainComponent>
    );
};

export default HomeComponent;