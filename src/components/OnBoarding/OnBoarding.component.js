import React from "react";
import Onboarding from 'react-native-onboarding-swiper';

import { Image } from "react-native";

export const OnBoarding = (props) => {
    const { onDone } = props;

    function getPages() {
        return [
            {
                backgroundColor: '#edc',
                image: <Image />,
                title: 'Slide 1',
                subtitle: 'Content',
            },
            {
                backgroundColor: '#fff',
                image: <Image />,
                title: 'Slide 2',
                subtitle: 'Content',
            },
            {
                backgroundColor: '#fff',
                image: <Image />,
                title: 'Slide 3',
                subtitle: 'Content',
            },
        ]
    }

    return <Onboarding
      pages={ getPages() }
      onDone={ onDone }
    />
}

export default OnBoarding;