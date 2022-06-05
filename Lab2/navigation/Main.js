import * as React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Tab1 from './screens/Tab1';
const Tab1Name = "Tab 1";
import Tab2 from './screens/Tab2';
const Tab2Name = "Tab 2";
import Tab3 from './screens/Tab3';
const Tab3Name = "Tab 3";
import Tab4 from './screens/Tab4';
const Tab4Name = "Tab 4";
import Tab5 from './screens/Tab5';
const Tab5Name = "Tab 5";
import Tab6 from './screens/Tab6';
const Tab6Name = "Tab 6";

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={Tab1}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === Tab1) {
                            iconName = focused ? 'radio-button-on' : 'radio-button-off';

                        } else if (rn === Tab2) {
                            iconName = focused ? 'radio-button-on' : 'radio-button-off';

                        } else if (rn === Tab3) {
                            iconName = focused ? 'radio-button-on' : 'radio-button-off';

                        } else if (rn === Tab4) {
                            iconName = focused ? 'radio-button-on' : 'radio-button-off';

                        } else if (rn === Tab5) {
                            iconName = focused ? 'radio-button-on' : 'radio-button-off';

                        } else if (rn === Tab6) {
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

            <Tab.Screen name={Tab1Name} component={Tab1} />
            <Tab.Screen name={Tab2Name} component={Tab2} />
            <Tab.Screen name={Tab3Name} component={Tab3} />
            <Tab.Screen name={Tab4Name} component={Tab4} />
            <Tab.Screen name={Tab5Name} component={Tab5} />
            <Tab.Screen name={Tab6Name} component={Tab6} />
            </Tab.Navigator>

        </NavigationContainer>
    );
}