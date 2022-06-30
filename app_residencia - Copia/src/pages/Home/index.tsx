import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, ScrollView, FlatList, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Text, Card } from 'react-native-elements';
import AxiosInstance from '../../api/AxiosInstance';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';
import Loading from '../../components/Loading';
import { CategoriaType } from '../../models/CategoriaType';
import { ProdutoType } from '../../models/ProdutoType';
import BarraPesquisa from '../../components/BarraPesquisa';

const Home = ({ navigation }) => {
    const { usuario } = useContext(AutenticacaoContext);
    const [categoria, setCategoria] = useState<CategoriaType[]>([]);
    const [produto, setProduto] = useState<ProdutoType[]>([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        getDadosCategoria();
        getDadosProdutos();
    }, []);

    const [loading, setLoading] = useState(false);
    const getDadosCategoria = async () => {
        setLoading(true)
        AxiosInstance.get(
            `/categoria`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }
        ).then(result => {
            console.log('Dados das categorias ' + JSON.stringify(result.data))
            setCategoria(result.data);
            setLoading(false)
        }).catch((error) => {
            console.log("Erro ao carregar a lista de categorias - " + JSON.stringify(error));

        });
    }
    const getDadosProdutos = async () => {
        setLoading(true)
        AxiosInstance.get(
            `/produto`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }
        ).then(result => {
            console.log('Dados das produtos ' + JSON.stringify(result.data))
            setProduto(result.data);
            setLoading(false)
        }).catch((error) => {
            console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));

        });
    }

    return (
        <ScrollView style={styles.container} >
            <BarraPesquisa navigation={navigation}/>
            <FlatList
                data={categoria}
                keyExtractor={item => String(item.idCategoria)}
                renderItem={({ item }) => <ListCategoria categoria={item} />}
                horizontal={true}
                onEndReached={getDadosCategoria}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<FooterList load={loading} />}
            />
            {/* <ScrollView style={styles.scroll_categorias} horizontal={true}>
                {
                    categoria.map((key, index) => (
                        <TouchableOpacity key={index}
                            onPress={() => console.log(`Categoria ${key.nomeCategoria} foi clicada`)}
                            style={styles.botao_categoria}
                        >
                            <View style={styles.view_itens_categoria}>
                                <Text style={styles.texto_nome_categoria} >{key.nomeCategoria}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView> */}
            <Text>{'Recentes:'}</Text>
            <FlatList
                data={produto}
                keyExtractor={item => String(item.idProduto)}
                renderItem={({ item }) => <ListProduto produto={item} />}
                horizontal={true}
                onEndReached={getDadosProdutos}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<FooterList load={loading} />}
            />
            {/* <ScrollView horizontal={true}>
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
                    <Card.Title style={styles.limite}>
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
            </ScrollView> */}
        </ScrollView>
    );
};
function ListCategoria({ categoria }) {
    return (
        <View style={styles.listCategoria}>
            <Text style={styles.listTextCategoria}>{categoria.nomeCategoria}</Text>
        </View>
    )
}
function ListProduto({ produto }) {
    return (
        <View style={styles.listProduto}>
            <Text style={styles.listTextProduto}>{produto.nomeProduto}</Text>
        </View>
    )
}
function FooterList({ load }) {
    if (!load) return null;
    return (
        <View style={styles.loading}>
            <ActivityIndicator size={25} color='#4a09bb' />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4fb00',
        padding: 25,
    },
    listProduto: {
        padding: 15,
        backgroundColor: '#b4fb00',
        borderColor: 'black',
        borderWidth: 1.5,
        height: 200,
        width: 170,
        margin: 20
    },
    // limite: {
    //     maxWidth: 130,
    //     fontWeight: 'bold',
    // },
    imagem: {
        width: 130,
        height: 180
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
    listTextProduto: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 50
    },
    listCategoria: {
        backgroundColor: '#4a09bb',
        margin: 10,
        marginBottom: 20,
        width: 100,
        height: 100,
        justifyContent: 'center',
    },
    listTextCategoria: {
        padding: 10,
        textAlign: 'center',
        color: 'white',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default Home;
