import * as React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalkThrough from '../screens/walkthrough';
import DrawerRoute from './drawer';
import { colors } from '../themes';
const AppStack = createNativeStackNavigator();

export default function Navigation() {

    const DetailScreen = () => {
        return <View />;
    };
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={{colors: {background: colors.background}}}>
                <AppStack.Navigator screenOptions={{gestureEnabled: false}}>
                    <AppStack.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="WalkThrough"
                        component={WalkThrough}
                    />
                    <AppStack.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="Detail"
                        component={DrawerRoute}
                    />
                </AppStack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
