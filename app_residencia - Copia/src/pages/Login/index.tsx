import React, { useState, useContext } from 'react';
import { View, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native'
import { Input, Icon, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import Loading from '../../components/Loading';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { login } = useContext(AutenticacaoContext);
    const [visible, setVisible] = useState(false);
    //const navigation = useNavigation();

    const handleLogin = async (email: string, senha: string) => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 7000);
        console.log(`Email: ${email} - Senha: ${senha}`);

        const respostaLogin = await login(email, senha);
        if (!respostaLogin) {
            Alert.alert(
                "Erro",
                "",
                [
                    { text: "OK" },
                    { text: "Não foi possível realizar o login." },
                ]
            );
        } else {
            navigation.navigate('HomeScreen');
        }
        //navigation.navigate('Home')

    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.texto_entrada}>{'Bem-vindo a GameIsLife'}</Text>
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
                    secureTextEntry
                />
                <Button
                    title='Entrar'
                    onPress={() => handleLogin(email, senha)}
                    color='#4a09bb'
                />


            </View>
            <Loading
                visible={visible}
            />
        </>
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