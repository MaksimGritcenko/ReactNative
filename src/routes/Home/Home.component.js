import React, { useState } from 'react';
import {
    Text,
    View,
    Pressable, TextInput, ActivityIndicator
} from 'react-native';
import MainComponent from "../../components/Main/Main.component";
import {
    darkGreen,
} from "../../constants/Colors";

import LV from '../../utils/Translations/lv.json';
import SearchResultComponent from '../../components/SearchResult/SearchResult.component';

import { styles } from "./Home.styles";

export const HomeComponent = ({ logout, opacity, language }) => {
    const [searchText, setSearchText] = useState('');
    const [searchData, setSearchData] = useState('');

    async function searchResults(searchText) {
        // todo: nizhe fetch tupo chtobi dannije fake dostatj i zastilitj spisok
        // todo: sam spisok nahoditsja v SearchResult.component.js.
        // todo: searchText eto tekst kotorij udot propisal v inpute.
        // todo: daljshe sam xD

        const apiResponse = await fetch("https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages");
        const data = await apiResponse.json();
        setSearchData(data)
    }

    return (
        <MainComponent>
            <View style={{ height: '100%', justifyContent: 'center', alignItems: "center"}}>
                <View style={ styles.container }>
                    <View style={ styles.searchInput }>
                        <TextInput
                          style={{ fontWeight: 'bold', fontSize: 20 }}
                          placeholder="Search"
                          onChangeText={ text => setSearchText(text) }
                          onSubmitEditing={() => searchResults(searchText)}
                        />
                    </View>
                    <SearchResultComponent data={ searchData } />
                </View>
                <View style={{
                    ...styles.logoutButtonWrapper,
                    opacity,
                    borderWidth: 1,
                    borderColor: darkGreen,
                    borderRadius: 20 }}
                >
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