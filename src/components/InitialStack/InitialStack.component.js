import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginComponent from "components/Login";
import RegisterComponent from "components/Register";
import DashboardComponent from "components/Dashboard/Dashboard.component";

const Stack = createStackNavigator()

export function InitialStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#3740FE',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen
                name="Login"
                component={LoginComponent}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Signup"
                component={RegisterComponent}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dashboard"
                component={DashboardComponent}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default InitialStack;