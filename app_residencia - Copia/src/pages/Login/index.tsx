import React, { useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Input, Icon, Text } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = ({ email, senha }) => {
        console.log(`Email: ${email} - Senha: ${senha}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
            <Input
                placeholder='E-mail'
                onChangeText={setEmail}
                value={email}
                leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24} />}
            />
            <Input
                placeholder='Senha'
                onChangeText={setSenha}
                value={senha}
                leftIcon={<Icon name='key' color='#000' type='font-awesome' size={24} />}
            />
            <TouchableHighlight style={styles.button}>
                <Button
                    title='Entrar'
                    onPress={() => handleLogin({ email, senha })}
                    color= '#4a09bb'
                />
            </TouchableHighlight>
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
        fontSize: 30,
        marginBottom: 70,
        marginTop: -70,
        textAlign: 'center',
        color: 'black',
    },
    button: {
        borderRadius: 25,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 75,
        paddingRight: 75,
        margin: 40,
        marginTop: 20,
        backgroundColor: '#4a09bb'

    }
});

export default Login;