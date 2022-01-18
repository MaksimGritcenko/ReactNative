import React, { useState } from 'react';
import { Text, Switch, View, TouchableOpacity, TextInput } from 'react-native';
import LogoComponent from "../../Logo/Logo.component";
import { styles } from './Settings.style';
import { getIsLV } from '../../../utils/Translations/Translations';
import LV from '../../../utils/Translations/lv.json';

export const SettingsComponent = (props) => {
  const {
    changeApplicationLanguage,
    language,
    changeApplicationFontSize,
    isChangeLanguageVisible,
    isChangeFontSizeVisible,
    fontSize: appFontSize,
    changePassword,
    isChangePswVisible
  } = props;

  const [isEnabledDelSwitcher, setIsEnabledDelSwitcher] = useState(false);


  const toggleSwitch = (id) => {
    if (id === 1) {
      changeApplicationLanguage();
    }

    if (id === 2) {
      changeApplicationFontSize();
    }

    if (id === 3) {
      changePassword();
    }
    if (id === 4) setIsEnabledDelSwitcher(previousState => !previousState);
  }

  const groups = [
    {
      id: 1,
      name: getIsLV(language) ? LV.Language : 'Language',
      value: language,
    },
    {
      id: 2,
      name: getIsLV(language) ? LV.FontSize : 'Font size',
      value: appFontSize,
    },
    {
      id: 3,
      name: getIsLV(language) ? LV.ChangePassword : 'Change password',
      value: getIsLV(language) ? LV.Change : 'Change',
    },
    {
      id: 4,
      name: getIsLV(language) ? LV.DeleteChatHistory : 'Delete chat history',
      value: isEnabledDelSwitcher,
    },
  ];

  function renderGroup() {
    return groups.map(({ name, id, value, popupBox}) => {
      return (
        <View style={ styles.GeneralSettingsGroup } key={ id }>
          <Text style={{
            ...styles.GeneralSettingsGroupTitle,
            fontSize: setFontSize()
          }}
          >
            { name }
          </Text>
          { id !== 4 && (
            <>
              <TouchableOpacity activeOpacity={ .5 } onPress={ () => toggleSwitch(id) }>
                <Text style={{ fontSize: setFontSize() }}>
                  { value }
                </Text>
              </TouchableOpacity>
            </>
          )}
          { id === 4 && (
            <Switch
              trackColor={{ false: "#767577", true: '#81b0ff'}}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(id)}
              value={ isEnabledDelSwitcher }
            />
          )}

        </View>
      );
    });
  }

  function setFontSize() {
    return !isNaN(appFontSize * 1) ? appFontSize * 1 : 14;
  }

  function renderChangePswInput() {
    return (
      <View style={ styles.ChangePswBox }>
        <TextInput
          placeholder={ getIsLV(language) ? LV.EnterNewPassword : 'Enter new password' }
          style={ styles.ChangePswBoxInput }
        />
        <TextInput
          placeholder={ getIsLV(language) ? LV.ConfirmPassword : 'Confirm password' }
          style={ styles.ChangePswBoxInput }
        />
        <TouchableOpacity
          activeOpacity={ .9 }
          onPress={() => changePassword('1')}
          style={ styles.ChangePswBoxButton }
        >
          <Text>{ getIsLV(language) ? LV.Change : 'Change'}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  function renderLanguageBox() {
    return (
      <View style={ styles.LanguageBox }>
        <TouchableOpacity
          onPress={() => changeApplicationLanguage('lv')}
          style={ styles.LanguageBoxButton }
          activeOpacity={ .9 }
        >
          <Text style={{ ...styles.LanguageBoxButtonTitle, fontSize: setFontSize() }}>LV</Text>
        </TouchableOpacity>
        <View style={ styles.Divider } />
        <TouchableOpacity
          onPress={() => changeApplicationLanguage('en')}
          style={ styles.LanguageBoxButton }
          activeOpacity={ .9 }
        >
          <Text style={ styles.LanguageBoxButtonTitle }>ENG</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderFontSizeBox() {
    return (
      <View style={ styles.FontSizeBox}>
        <TouchableOpacity
          onPress={() => changeApplicationFontSize(14)}
          style={ styles.FontSizeBoxButton }
          activeOpacity={ .9 }
        >
          <Text style={{ ...styles.LanguageBoxButtonTitle, fontSize: setFontSize() }}>Small</Text>
        </TouchableOpacity>
        <View style={ styles.Divider } />
        <TouchableOpacity
          onPress={() => changeApplicationFontSize(16)}
          style={ styles.FontSizeBoxButton }
          activeOpacity={ .9 }
        >
          <Text style={{ ...styles.LanguageBoxButtonTitle, fontSize: setFontSize() }}>Medium</Text>
        </TouchableOpacity>
        <View style={ styles.Divider } />
        <TouchableOpacity
          onPress={() => changeApplicationFontSize(18)}
          style={ styles.FontSizeBoxButton }
          activeOpacity={ .9 }
        >
          <Text style={{ ...styles.LanguageBoxButtonTitle, fontSize: setFontSize() }}>Large</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
      <View>
        <LogoComponent />
        { isChangeLanguageVisible &&  renderLanguageBox() }
        { isChangeFontSizeVisible &&  renderFontSizeBox() }
        { isChangePswVisible && renderChangePswInput() }
          <View style={ styles.Settings }>
            <Text
              style={{
                ...styles.Title,
                fontSize: !isNaN(appFontSize * 1) ? appFontSize * 1 : 14
              }}
            >
              { getIsLV(language) ? LV.GeneralSettings : 'General Settings'}
            </Text>
          </View>
            { renderGroup() }
      </View>
  );
}

export default SettingsComponent;