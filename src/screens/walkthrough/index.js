import React from 'react';
import { View, Image, Text } from 'react-native';
import { colors, images } from '../../themes';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/button';

const WalkThrough = () => {

    const navigation = useNavigation();

    return <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={images.background} style={{ resizeMode: 'cover', width: '100%', height: '70%'}} />
        <View style={{ width: '85%', height: 200, position: 'absolute', left: 0, bottom: 0, backgroundColor: colors.primary, borderTopRightRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
            
            <View style={{width: '70%', height: '70%'}}>
                <Text style={{ fontWeight: 'bold', color: colors.white, fontSize: 22, padding: 5 }}>Transfer That Is Safe</Text>
                <Text style={{ color: colors.white, padding: 5, paddingBottom: 10 }}>You have nothing to be scared about, we got you covered.</Text>
                <Button background={colors.white} textColor={colors.primary} text={'Start Banking'} borderColor={colors.primary} onPress={() => navigation.navigate('Detail')}/>
            </View>
        </View>
    </View>;

}; 

export default WalkThrough;