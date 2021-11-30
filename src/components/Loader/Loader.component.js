import React from 'react';
import { View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export const LoaderComponent = () => {
  return (
    <View
      style={{
        backgroundColor: '#212121',
        width,
        height: height + 100,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: .1
      }}
    />
  );
}

export default LoaderComponent;