import * as React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../../themes';
import HomeScreen from '../../screens/home';
import RequestMoney from '../../screens/request';
import SendMoney from '../../screens/send';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            <Drawer.Screen name="Send" component={RequestMoney} options={{
                headerTitle: () => <Text style={{ textAlign: 'left', fontSize: 22, color: colors.white }}>New Request</Text>,
            }} />
            <Drawer.Screen name="Request" component={SendMoney} />
        </Drawer.Navigator>
    );
}