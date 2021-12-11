import React from "react";
import Onboarding from 'react-native-onboarding-swiper';

import {
    Image,
    View,
    Modal,
    TouchableOpacity,
} from "react-native";
import RenderHtml from 'react-native-render-html';
import { MaterialIcons } from '@expo/vector-icons';

import Latvia from '../../constants/images/latvia3.jpeg';
import Usa from '../../constants/images/usa.jpg';
import { darkBlue } from "../../constants/Colors";

export const OnBoarding = (props) => {
    const {
        onDone,
        language,
        onLanguageSelect,
        onboardingContent
    } = props;

    function getLanguage() {
        return language === 'lv';
    }

    function getPages() {
        return Object.entries(onboardingContent)
            .filter(([key]) => key.toLowerCase().includes('slide'))
            .map(([_, content]) => {
                return {
                    backgroundColor: darkBlue,
                    image: <Image />,
                    subtitle: <RenderHtml
                        source={ { html: content } }
                        baseStyle={{
                            color: '#fff',
                            width: '80%',
                            fontSize: 16
                        }}
                    />,
                };
            }
        );
    }

    function getCountryFlags() {
        return [
            {
                id: 1,
                image: Latvia,
                onPress: () => onLanguageSelect(1)
            },
            {
                id: 2,
                image: Usa,
                onPress: () => onLanguageSelect(2)
            }
        ];
    }

    function renderFlags() {
        return getCountryFlags().map(({ id, image, onPress }) => {
            return (
                <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                >
                    <TouchableOpacity onPress={onPress}>
                        <Image style={{ width: 100, height: 100}} source={ image } />
                    </TouchableOpacity>
                </View>
            )
        });
    }

    function renderDoneBtn(props) {
        return (
            <MaterialIcons
                name="done"
                size={ 24 }
                color="#fff"
                style={{ marginRight: 15 }}
                { ...props }
            />
        );
    }

    if (!language || !onboardingContent) {
        return (
            <Modal transparent visible>
                <View style={{ flexDirection: 'column', flex: 1, justifyContent: "center"}}>
                    { renderFlags() }
                </View>
            </Modal>
        );
    }

    return <Onboarding
      showSkip={ false }
      DoneButtonComponent={ renderDoneBtn  }
      pages={ getPages() }
      onDone={ onDone }
    />
}

export default OnBoarding;