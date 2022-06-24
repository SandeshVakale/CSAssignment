import React from 'react';
import { Image, View, Text } from 'react-native';
import Button from '../../components/button';
import { colors } from '../../themes';


const RequestMoney = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ height: 140, width: 140, borderRadius: 70, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
                <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: colors.secondary, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: 'https://robohash.org/atsintcorporis.png' }} style={{ height: 60, width: 60, resizeMode: 'contain', borderRadius: 30 }} />
                </View>
            </View>

            <Text style={{ fontWeight: 'bold', color: colors.white, fontSize: 22, padding: 15}}>Chiraag Gupta</Text>
            <Text style={{ color: colors.white, padding: 15  }}>is requesting for</Text>
            <Text style={{ fontWeight: 'bold', color: colors.white, fontSize: 32, padding: 15}}>$ 200,000</Text>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 120 }}   >
                <Button onPress={() => navigation.goBack()} text={'Send Money'} textColor={colors.white} background={colors.lightBlood} />
                <Button onPress={() => navigation.goBack()} textColor={colors.tertiary} borderColor={colors.tertiary} background={colors.background} text={'Don\'t Send'} />
            </View>
        </View>
    );
};

export default RequestMoney;
