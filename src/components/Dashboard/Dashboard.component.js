import React, { useState } from "react";
import { BottomNavigation } from 'react-native-paper';
import { View } from "react-native";
import ChatComponent from "../../routes/Chat/Chat.component";
import HomeComponent from "../../routes/Home";
import { routes } from "../../utils/BottomNavigation/routes";

export const DashboardComponent = (props) => {
    const [index, setIndex] = useState(0);

    function HomeRoute() {
        const { navigation } = props;
        return <HomeComponent  navigation={ navigation } />
    }

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        chat: ChatComponent,
    }, );

    return (
        <View style={{ height: '100%'}}>
            <BottomNavigation
                { ...props }
                navigationState={{ index, routes }}
                onIndexChange={ setIndex }
                renderScene={ renderScene }
                style={{ width: '100%' }}
                barStyle={{ backgroundColor: '#202a3d' }}
            />
        </View>
    )
}

export default DashboardComponent;