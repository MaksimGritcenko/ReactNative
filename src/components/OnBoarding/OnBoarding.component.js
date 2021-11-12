import React from "react";
import Onboarding from 'react-native-onboarding-swiper';

import {
    Image,
    View,
    Modal,
    TouchableOpacity
} from "react-native";

import LV from '../../utils/Translations/lv.json';

import Latvia from '../../constants/images/latvia3.jpeg';
import Usa from '../../constants/images/usa.jpg';

export const OnBoarding = (props) => {
    const { onDone, language, onLanguageSelect } = props;

    function getLanguage() {
        return language === 'lv';
    }

    function getPages() {
        return [
            {
                backgroundColor: '#edc',
                image: <Image />,
                title: getLanguage() ? LV.OnBoardingScreenFirstTitle : 'Slide 1',
                subtitle: getLanguage() ? LV.OnBoardingScreenFirstSubTitle : 'Content',
            },
            {
                backgroundColor: '#fff',
                image: <Image />,
                title: getLanguage() ? LV.OnBoardingScreenSecondTitle : 'Slide 1',
                subtitle: getLanguage() ? LV.OnBoardingScreenSecondSubTitle : 'Content',
            },
            {
                backgroundColor: '#fff',
                image: <Image />,
                title: getLanguage() ? LV.OnBoardingScreenThirdTitle : 'Slide 1',
                subtitle: getLanguage() ? LV.OnBoardingScreenThirdSubTitle : 'Content',
            },
        ]
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

    if (!language) {
        return (
            <Modal transparent visible>
                <View style={{ flexDirection: 'column', flex: 1, justifyContent: "center"}}>
                    { renderFlags() }
                </View>
            </Modal>
        );
    }

    return <Onboarding
      pages={ getPages() }
      onDone={ onDone }
    />
}

export default OnBoarding;