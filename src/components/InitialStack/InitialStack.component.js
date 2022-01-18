import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginComponent from "components/Login";
import RegisterComponent from "components/Register";
import DashboardComponent from "components/Dashboard";

const Stack = createStackNavigator()

export function InitialStack() {
    function getNavMap() {
        return [
            {
                id: 1,
                name: "Login",
                component: LoginComponent
            },
            {
                id: 2,
                name: "Signup",
                component: RegisterComponent
            },
            {
                id: 3,
                name: "Dashboard",
                component: DashboardComponent
            }
        ];
    }

    function renderScreens() {
        return getNavMap().map(({ id, name, component }) => <Stack.Screen
            key={ id }
            name={ name }
            component={ component }
            options={{ headerShown: false }}
        />);
    }

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
            { renderScreens() }
        </Stack.Navigator>
    );
}

export default InitialStack;