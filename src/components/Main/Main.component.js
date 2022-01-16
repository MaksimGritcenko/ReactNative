import React from "react";
import { connect } from 'react-redux';

import { Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from "./Main.styles";
import { useNavigation } from '@react-navigation/native';
import Logo from '../../constants/images/Logo.jpg';
import LV from '../../utils/Translations/lv.json';
import { getIsLV } from '../../utils/Translations/Translations';

export const mapStateToProps = state => ({
  language: state.UserReducer.language
});

export const MainComponent = (props) => {
  const { language } = props;
  const navigation = useNavigation();

  function redirectToHome() {
    navigation.jumpTo(getIsLV(language) ? LV.NavigationDashboardTitle : 'Dashboard')
  }

  return (
      <SafeAreaView
        style={ styles.backgroundWrapper }

      >
          <TouchableOpacity activeOpacity={ .9 } onPress={ () => redirectToHome() } style={ styles.LogoWrapper } >
            <Image source={ Logo } style={ styles.Logo } />
          </TouchableOpacity>
      </SafeAreaView>
  );
};

export default connect(mapStateToProps, null)(MainComponent);