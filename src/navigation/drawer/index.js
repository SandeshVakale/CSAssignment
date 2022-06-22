import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Button from '../../components/button';
import { colors } from '../../themes';
import HomeScreen from '../../screens/home';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoute() {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            drawerLabelStyle: {
                color: colors.white
            }
        }}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{
                headerTitle: () => <Text style={{ fontWeight: 'bold', textAlign: 'left', fontSize: 22, color: colors.white }}>Hello Sandra,</Text>,
                headerTitleAlign: 'left',
                headerRight: () => (
                    <TouchableOpacity style={{height: 30, backgroundColor: colors.tertiary, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10}} >
                        <Text style={{color: colors.primary, paddingHorizontal: 10}}>Add money</Text>
                    </TouchableOpacity>
                ),
            }} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    );
}