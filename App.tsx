import React, {useEffect, useState} from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// @ts-ignore
import store from 'store';
// @ts-ignore
import DashboardComponent from "components/Dashboard/Dashboard.component";
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import InitialStack from "./src/components/InitialStack/InitialStack.component";

import useCachedResources from './src/hooks/useCachedResources';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('')
  const isLoadingComplete = useCachedResources();

  // @ts-ignore
    useEffect(async () => {
    const email = await AsyncStorage.getItem('@email')

    setIsLoggedIn(email)
  })

  if (isLoggedIn === null && store.getState().UserReducer.email === null) {
    return (
        <Provider store={store}>
          <NavigationContainer>
            <InitialStack />
          </NavigationContainer>
        </Provider>
    )
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <Provider store={store}>
          <SafeAreaProvider>
            <DashboardComponent />
          </SafeAreaProvider>
        </Provider>
    );
  }
}
