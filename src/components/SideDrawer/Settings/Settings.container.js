import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import SettingsComponent from './Settings.component';
import {
  updateLanguageVisibilityBlock,
  updateApplicationFontSize
} from '../../../store/Settings/Settings.action';
import { setPreferedLanguage } from '../../../store/User/User.action';

export const mapStateToProps = state => ({
  language: state.UserReducer.language,
  isLangBoxVisible: state.SettingsReducer.isLangBoxVisible,
  fontSize: state.SettingsReducer.fontSize
});

export const mapDispatchToProps = dispatch => ({
  updateLanguageVisibilityBlock: isLangBoxVisible => dispatch(updateLanguageVisibilityBlock(isLangBoxVisible)),
  setPreferedLanguage: language => dispatch(setPreferedLanguage(language)),
  updateApplicationFontSize: fontSize => dispatch(updateApplicationFontSize(fontSize))
});

export const SettingsContainer = (props) => {
  const {
    language,
    isLangBoxVisible,
    setPreferedLanguage,
    fontSize,
    updateApplicationFontSize
  } = props;

  const [isChangeLanguageVisible, setIsChangeLanguageVisible] = useState(false);
  const [isChangeFontSizeVisible, setIsChangeFontSizeVisible] = useState(false);
  const [isChangePswVisible, setIsChangePswVisible] = useState(false);

  const containerProps = () => {
    return {
      isChangeLanguageVisible,
      isChangeFontSizeVisible,
      fontSize,
      isChangePswVisible
    }
  }

  const changeApplicationLanguage = (lang) => {
    setIsChangeLanguageVisible(previousState => !previousState);

    if (lang) {
      setPreferedLanguage(lang)
    }
  }

  const changeApplicationFontSize = (size) => {
    setIsChangeFontSizeVisible(previousState => !previousState);

    if (size) {
      updateApplicationFontSize(size)
    }
  }

  function changePassword(args) {
    setIsChangePswVisible(true);

    // todo: zakonchitj logiku menjatj password
    // todo: sejchas prosto zakrivajetsja okno
    if (args) {
      setIsChangePswVisible(false);
    }
  }

  return (
    <SettingsComponent
      language={ language }
      changeApplicationLanguage={ changeApplicationLanguage }
      isLangBoxVisible={ isLangBoxVisible }
      changeApplicationFontSize={ changeApplicationFontSize }
      changePassword={ changePassword }
      { ...containerProps() }
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
