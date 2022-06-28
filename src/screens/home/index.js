import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { colors } from '../../themes';
import Button from '../../components/button';
import BottomSheet from 'react-native-simple-bottom-sheet';
import transactions from '../../fake/transactions.json';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {

    const navigation = useNavigation();

    return <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: '70%', marginHorizontal: 20, paddingVertical: 40}}>
            <Text style={{ color: colors.white, padding: 5, paddingBottom: 10  }}>Your current balance is</Text>
            <Text style={{ fontWeight: 'bold', color: colors.white, fontSize: 32, padding: 5}}>$ 200,000</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button textColor={colors.tertiary} borderColor={colors.tertiary} background={colors.background} text={'Request money'} onPress={() => navigation.navigate('Request')}/>
            <Button textColor={colors.tertiary} borderColor={colors.tertiary} background={colors.background} text={'Send money'} onPress={() => navigation.navigate('Send')}/>
        </View>
        <BottomSheet isOpen wrapperStyle={{ backgroundColor: colors.secondary, paddingHorizontal: 0 }} lineStyle={{ backgroundColor: colors.tertiary }}>
            {(onScrollEndDrag) => (
                <ScrollView onScrollEndDrag={onScrollEndDrag}>
                    <Text style={{ color: colors.white, padding: 15, fontSize: 22, fontWeight: 'bold' }}>All Transactions</Text>
                    {transactions.map((data, index) => (
                        <View key={`${index}`} style={{ height: 70, backgroundColor: index % 2 === 0 ? colors.secondary : colors.tertiary, width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Image source={{ uri: data.image }} style={{ height: 40, width: 40, borderRadius: 20, resizeMode: 'contain' }}/>
                            <View style={{ width: 200, flexDirection: 'column' }}>
                                <Text style={{ fontSize: 18, color: 'gray' }}>{data.name}</Text>
                                <View  style={{borderRadius: 10, padding: 2, paddingHorizontal: 5, maxWidth: 95, backgroundColor: data.status === 'Received' ? colors.passedgreen : data.status === 'Failed' ? colors.lightBlood : colors.warn, flexDirection: 'row', justifyContent: 'space-around' }} >
                                    <Icon name={data.status === 'Failed' ? 'exclamationcircleo' : 'adduser'} size={18} color={colors.white}/>
                                    <Text style={{ fontSize: 16, color: colors.white, }}>{data.status}</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 24, width: 120, fontWeight: 'bold', color: data.status === 'Received' ? colors.passedgreen : data.status === 'Failed' ? colors.lightBlood : colors.warn }}>$ {data.money}</Text>
                        </View>
                    ))}
                </ScrollView>
            )}
        </BottomSheet>
    </View>;

}; 

export default HomeScreen;