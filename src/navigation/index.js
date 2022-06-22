import * as React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WalkThrough from '../screens/walkthrough';
const AppStack = createNativeStackNavigator();

export default function Navigation() {

    const DetailScreen = () => {
        return <View />;
    };
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{gestureEnabled: false}}>
                    <AppStack.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="WalkThrough"
                        component={WalkThrough}
                    />
                    <AppStack.Screen
                        name="Detail"
                        component={DetailScreen}
                    />
                </AppStack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
