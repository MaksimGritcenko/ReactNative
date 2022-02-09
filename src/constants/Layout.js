import { Dimensions, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

export const CONTENT_PADDING_TOP = Platform.OS === 'ios' ? 60 : 150;
export const CONTENT_MARGIN_TOP = Platform.OS === 'ios' ? 130 : 150;
