import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CarrinhoContext } from '../../context/CarrinhoContext';

const Produto = ({ route, navigation }) => {

    const {id_produto, sku, nome_produto, descricao_produto, imagem_produto, preco_produto} = route.params;
    const { adicionarProduto } = useContext(CarrinhoContext);

    /*_sku: string, _nome: string, _descricao: string,
     _preco: number, _imagem: string*/
    const handleAddProduto = () => {
        adicionarProduto(sku, nome_produto, descricao_produto, preco_produto, imagem_produto);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerImagem}>
                <Text>Imagem</Text>
            </View>
            <View style={styles.containerProduto}>
                <Text style={styles.nome_produto}>{nome_produto}</Text>
                <Text style={styles.preco_produto}>{nome_produto}</Text>
                <TouchableOpacity 
                style={styles.btt_comprar}
                onPress={() => handleAddProduto()}>
                    <Text style={styles.txt_btt_comprar}>Comprar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.btt_favoritar}>
                    <Text style={styles.txt_btt_comprar}>Favoritar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#569877',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20
    },
    containerImagem: {
        width: '50%'
    },
    containerProduto: {
        width: '50%'
    },
    nome_produto: {
        fontSize: 24,
        color: 'black',
        marginBottom: 20,
        fontWeight: 'bold'
    },
    preco_produto: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    btt_comprar: {
        backgroundColor: '#000',
        padding: 10,
        marginBottom: 20,
        width: '70%'
    },
    btt_favoritar: {
       padding:10,
       borderBottomWidth: 2,
       borderColor: '#000',
       width: '70%'
    },
    txt_btt_comprar: {
        color: '#fff',
        textAlign: 'center'
    },
    txt_btt_favoritar: {
        color: '#000',
        textAlign: 'center'
    }
});

export default Produto;