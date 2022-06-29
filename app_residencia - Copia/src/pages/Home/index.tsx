import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { Text, Card } from 'react-native-elements';
import AxiosInstance from '../../api/AxiosInstance';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';

type CategoriaType = {
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}

const Home = ({ navigation }) => {
    const { usuario } = useContext(AutenticacaoContext);
    const [categoria, setCategoria] = useState<CategoriaType[]>([]);

    useEffect(() => {
        getDadosCategoria();
    }, []);

    const getDadosCategoria = async () => {
        AxiosInstance.get(
            `/categoria`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }
        ).then(result => {
            console.log('Dados das categorias ' + JSON.stringify(result.data))
            setCategoria(result.data);
        }).catch((error) => {
            console.log("Erro ao carregar a lista de categorias - " + JSON.stringify(error));

        });
    }

    return (
        <ScrollView style={styles.container}>
            <ScrollView style={styles.scroll_categorias} horizontal={true}>
                {
                    categoria.map((key, index) => (
                        <TouchableOpacity key={index}
                            onPress={() => console.log('Categoria ${key.nomeCategoria} foi clicada')}
                            style={styles.botao_categoria}
                        >
                            <View style={styles.view_itens_categoria}>
                                <Text style={styles.texto_nome_categoria} >{key.nomeCategoria}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <Text>{'Jogos mais populares:'}</Text>
            <ScrollView horizontal={true}>
                <Card containerStyle={styles.card_pai}>
                    <Card.Image style={styles.imagem} source={require('../../assets/fh5.jpg')} />
                    <Card.Divider />
                    <Card.Title style={styles.descricao}>
                        Forza Horizon 5
                    </Card.Title>
                    <Text style={styles.descricao}>Jogo de Corrida</Text>
                </Card>
                <Card containerStyle={styles.card_pai}>
                    <Card.Image style={styles.imagem} source={require('../../assets/fifa22.png')} />
                    <Card.Divider />
                    <Card.Title style={styles.descricao}>
                        Fifa 22
                    </Card.Title>
                    <Text style={styles.descricao}>Jogo de Futebol</Text>
                </Card>
                <Card containerStyle={styles.card_pai}>
                    <Card.Image style={styles.imagem} source={require('../../assets/nfs.png')} />
                    <Card.Divider />
                    <Card.Title style={styles.titulo}>
                        Need for Speed Heat
                    </Card.Title>
                    <Text style={styles.descricao}>Jogo de Corrida</Text>
                </Card>
                <Card containerStyle={styles.card_pai}>
                    <Card.Image style={styles.imagem} source={require('../../assets/cod.png')} />
                    <Card.Divider />
                    <Card.Title style={styles.descricao}>
                        Call of Duty WW2
                    </Card.Title>
                    <Text style={styles.descricao}>Jogo de Tiro</Text>
                </Card>
            </ScrollView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4fb00',
        padding: 25,
    },
    card_pai: {
        padding: 15,
        backgroundColor: '#b4fb00',
        borderColor: 'black',
        borderWidth: 1.5,
        maxHeight: 290,
        maxWidth: 220
    },
    titulo: {
        maxWidth: 130
    },
    imagem: {
        width: 130,
        height: 180
    },
    scroll_categorias: {
        //backgroundColor: '#333',
        flexGrow: 0,
    },
    view_itens_categoria: {
        width: 100,
        height: 100,
        backgroundColor: '#4a09bb',
        alignContent: 'center',
        justifyContent: 'center'
    },
    botao_categoria: {
        alignItems: 'center',
        padding: 10
    },
    texto_nome_categoria: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    descricao: {
        textAlign: 'center',
        marginBottom: 30
    }
});

export default Home;
