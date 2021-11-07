import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import DashboardComponent from "../Dashboard";
import InitialStack from "../InitialStack";
import OnBoarding from '../OnBoarding/';

import useCachedResources from '../../hooks/useCachedResources';

import { INITIAL_STACK, DASHBOARD, ONBOARD } from './Router.config';

export const mapStateToProps = (state) => ({
    email: state.UserReducer.email,
    isOnboarded: state.UserReducer.isOnboarded
});

export const mapDispatchToProps = (dispatch) => ({});

export function Router(props) {
  const { email, isOnboarded } = props

  const isLoadingComplete = useCachedResources();

  function getKeyByCondition() {
    if (!isOnboarded) {
      return ONBOARD;
    }

    if (!email) {
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

  function renderOnBoard() {
    return <OnBoarding />;
  }

  function renderProviderContent() {
    const key = getKeyByCondition();

    switch(key) {
      case INITIAL_STACK:
        return renderInitialStack();
      case DASHBOARD:
        return renderDashboard();
      case ONBOARD:
        return renderOnBoard();
      default:
        return null;
    }
  }

  if (!isLoadingComplete) {
    return null;
  }

  return  renderProviderContent();
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
