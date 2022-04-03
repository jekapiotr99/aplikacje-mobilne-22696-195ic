import * as React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SpreadScreen from './screens/SpreadScreen';
const spreadName = "Spread Operations";
import RestScreen from './screens/RestScreen';
const restName = "Rest Parameters";
import stateScreen from './screens/StateScreen';
const stateName = "useState hooks";

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={spreadName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === spreadName) {
                            iconName = focused ? 'radio-button-on' : 'radio-button-off';

                        } else if (rn === restName) {
                            iconName = focused ? 'radio-button-on' : 'radio-button-off';

                        } else if (rn === stateName) {
                            iconName = focused ? 'radio-button-on' : 'radio-button-off';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'teal',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10, fontWeight: "bold"},
                    style: { padding: 20, height: 100 }
                }}>

            <Tab.Screen name={spreadName} component={SpreadScreen} />
            <Tab.Screen name={restName} component={RestScreen} />
            <Tab.Screen name={stateName} component={stateScreen} />

            </Tab.Navigator>

        </NavigationContainer>
    );
}