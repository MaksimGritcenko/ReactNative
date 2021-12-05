import { Dimensions } from 'react-native';

export const getScreenHeight = () => {
    return Dimensions.get('window').height;
}

export const getScreenWidth = () => {
    return Dimensions.get('window').width;
}
