import React from 'react';
import { Text, TextInput, TouchableOpacity, Image, View } from 'react-native';
import { colors } from '../../themes';
import contacts from '../../fake/contacts.json';
import { ScrollView } from 'react-native-gesture-handler';
import BottomSheet from 'react-native-simple-bottom-sheet';
import Button from '../../components/button';

const SendMoney = ({ navigation }) => {
    const [text, setText] = React.useState('');
    const [data, setData] = React.useState(contacts);
    const [contact, setContact] = React.useState(null);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <TextInput 
                    maxLength={10}
                    placeholder="Search"
                    value={text}
                    onChangeText={searchFilterFunction}
                    style={{
                        fontSize: 20,
                        width: 250,
                        padding: 5,
                        borderColor: colors.passedgreen,
                        borderRadius: 5,
                        borderWidth: 1,
                        color: colors.white
                    }}/>
            ),
        });
    }, [navigation, text]);
  

    const searchFilterFunction = text => {    
        setText(text);
        const newData = contacts.filter(item => {      
            const itemData = `${item.name.toUpperCase()}`;
          
            const textData = text.toUpperCase();
            
            return itemData.indexOf(textData) > -1;    
        });
        
        setData(newData);  
    };

    return <View style={{flex: 1}}>
        <ScrollView>{data.map((item, index) => <TouchableOpacity key={index} style={{ justifyContent: 'center', flexDirection: 'column', alignItems: index % 2 === 0 ? 'flex-start' : 'flex-end', padding: 10, alignContent: 'center' }} onPress={() => setContact(item)}><View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: item.name === contact?.name ?  colors.passedgreen : colors.white }}><Image source={{ uri: item.image }} style={{ height: 50, width: 50, borderRadius: 25, resizeMode: 'contain' }}/></View><Text key={index} style={{ color: item.name === contact?.name ?  colors.passedgreen : colors.white }}>{item.name}</Text></TouchableOpacity>)}</ScrollView>
        {contact && <BottomSheet isOpen wrapperStyle={{ backgroundColor: colors.secondary, paddingHorizontal: 0 }} lineStyle={{ backgroundColor: colors.tertiary }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: 50 }}>
                <Image source={{ uri: contact.image }} style={{ height: 50, width: 50, borderRadius: 25, resizeMode: 'contain', padding: 5 }}/>
                <Text style={{ color: colors.white, padding: 5, fontSize: 28, fontWeight: 'bold' }}>{contact.name}</Text>
                <Text style={{ color: colors.white, padding: 5, fontSize: 22, fontWeight: 'bold' }}>{contact.phone}</Text>
                <Button onPress={() => navigation.goBack()} text={'Continue'} textColor={colors.white} background={colors.lightBlood} />
            </View>
        </BottomSheet>}
    </View>;
};

export default SendMoney;