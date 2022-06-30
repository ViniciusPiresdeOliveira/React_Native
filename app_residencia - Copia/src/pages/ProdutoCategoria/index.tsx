import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { ProdutoType } from '../../models/ProdutoType';
import AxiosInstance from "../../api/AxiosInstance";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { FlatList } from "react-native-gesture-handler";
import { usePesquisar } from "../../context/PesquisaContext";

const ProdutoCategoria = () => {
    const [produto, setProduto] = useState<ProdutoType[]>([]);
    const { usuario } = useContext(AutenticacaoContext);
    const [loading, setLoading] = useState(false);
    const pesquisar = usePesquisar();
    const [vazio, setVazio] = useState(false);

    useEffect(() => {
        getDadosProdutos();
    }, []);

    const getDadosProdutos = async () => {
        setLoading(true)
        AxiosInstance.get(
            `/produto`,
            { headers: { "Authorization": `Bearer ${usuario.token}` } }
        ).then(result => {
            const ListaProduto = result.data;
            let listaTemporaria: any = []
            ListaProduto.filter((produto) => {
                if (produto.nomeCategoria === pesquisar.pesquisa.nomeCategoria) {
                    listaTemporaria.push(produto)
                    setProduto(listaTemporaria);
                    setVazio(false);
                } else {
                    setVazio(true);
                }
            })
            console.log('Dados das produtos ' + JSON.stringify(result.data))
            setLoading(false)
        }).catch((error) => {
            console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
        });
    }
    function ListProduto({ produto }) {
        return (
            <View style={styles.listProduto}>
                <Text style={styles.listTextProduto}>{produto.nomeProduto}</Text>
            </View>
        )
    }
    return (

        // <View style={styles.container}>

        //     {!vazio && (
        //         <View>
        //             <Text style={styles.titulo_secao}>{'PRODUTO X CATEGORIA'}</Text>
        //             <FlatList
        //                 data={produto}
        //                 keyExtractor={item => String(item.idProduto)}
        //                 renderItem={({ item }) => <ListProduto produto={item} />}
        //                 horizontal={true}
        //             //     onEndReached={getDadosProdutos}
        //             //     onEndReachedThreshold={0.1}
        //             //     ListFooterComponent={<FooterList load={loading} />}
        //             />
        //         </View>
        //     )}

        //     {vazio && (
        //         <View>
        //             <Text>{'Nenhum produtos encontrado!'}</Text>
        //         </View>
        //     )
        //     };
        // </View>
        <View style={styles.container}>
            {!vazio && (
                <View>
                    <Text style={styles.titulo_secao}>{'PRODUTO X CATEGORIA'}</Text>
                    <FlatList
                        data={produto}
                        keyExtractor={(item, index) => String(item.idProduto)}
                        renderItem={({ item }) => <ListProduto produto={item} />}
                    // onEndReached={getDadosProdutos}
                    // onEndReachedThreshold={0.1}
                    // ListFooterComponent={<FooterList load={loading} />}
                    />
                </View>
            )}
            {vazio && (
                <View>
                    <Text style={styles.listaVazia}>
                        {'Nenhum Produto encotrado'}
                    </Text>
                </View>
            )}
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4fb00',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listProduto: {
        padding: 15,
        backgroundColor: '#b4fb00',
        borderColor: 'black',
        borderWidth: 1.5,
        height: 290,
        width: 220,
        margin: 20,
        marginTop: 110
    },
    listTextProduto: {
        textAlign: 'center',
        marginTop: 100,
        fontSize: 25
    },
    titulo_secao: {
        color: '#4a09bb',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listaVazia: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: -30
    }
})



export default ProdutoCategoria;