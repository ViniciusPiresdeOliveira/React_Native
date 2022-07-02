import React, { useContext, useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Carrinho = () => {
    const { listarProdutos, removerItemCarrinho } = useContext(CarrinhoContext);
    const [carrinho, setCarrinho] = useState();
    useEffect(() => {
        getDadosCarrinho();
    }, [])

    const getDadosCarrinho = () => {
        setCarrinho(listarProdutos());
    }

    const deleteItem = (idProduto:number) => {
        removerItemCarrinho(idProduto)
    }
    return (
        <FlatList
            data={carrinho}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
                return (
                    <View style={styles.container_flatlist}>
                        <Text>{item.id_produto}</Text>
                        <Text>{item.sku}</Text>
                        <Text>{item.nome_produto}</Text>
                        <Text>{item.descricao_produto}</Text>
                        <Text>{item.preco_produto}</Text>
                        <TouchableOpacity
                            onPress={() => deleteItem(item.id_produto)}
                        >
                            <Icon name='trash' color='#000' type='font-awesome' size={36} />
                        </TouchableOpacity>
                    </View>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    container_flatlist: {
        backgroundColor: '#569877',
        padding: 16,
        flexDirection: 'row',
        marginTop: 20,
        margin: 20
    }
});
export default Carrinho;