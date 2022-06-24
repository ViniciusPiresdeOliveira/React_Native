import React, { useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Input, Icon, Text } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Home = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleLogin = ({ email, senha }) => {
        console.log(`Email: ${email} - Senha: ${senha}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto_entrada}>{'Delivery'}</Text>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4fb00',
        padding: 30,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    texto_entrada: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: -500,
        textAlign: 'left',
        color: 'black',
    }
});

export default Home;
