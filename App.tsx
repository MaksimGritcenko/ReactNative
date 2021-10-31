import React, {useEffect, useState} from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// @ts-ignore
import store from 'store';
// @ts-ignore
import DashboardComponent from "components/Dashboard";
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import InitialStack from "./src/components/InitialStack/InitialStack.component";
import { INITIAL_STACK, DASHBOARD } from './App.config';
import useCachedResources from './src/hooks/useCachedResources';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('')
  const isLoadingComplete = useCachedResources();

  // @ts-ignore
  useEffect(async () => {
    const email = await AsyncStorage.getItem('@email')
    setIsLoggedIn(email)
  });

  function getKeyByCondition() {
    if (isLoggedIn === null && store.getState().UserReducer.email === null) {
      return INITIAL_STACK;
    }

    return DASHBOARD;
  }

  function renderInitialStack() {
    return (
      <NavigationContainer>
        <InitialStack />
      </NavigationContainer>
    );
  }

  function renderDashboard() {
    return (
      <SafeAreaProvider>
        <DashboardComponent />
      </SafeAreaProvider>
    );
  }

  function renderProviderContent() {
    const key = getKeyByCondition();

    switch(key) {
      case INITIAL_STACK:
        return renderInitialStack();
      case DASHBOARD:
        return renderDashboard();
      default:
        return null;
    }
  }

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      { renderProviderContent() }
    </Provider>
  );
}
