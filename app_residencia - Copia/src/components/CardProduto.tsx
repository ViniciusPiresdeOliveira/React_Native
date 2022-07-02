import React from 'react';
import {Card, Text} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardProduto = (props:any) => {
  const dadosDoProduto = props.dados;
  const navigation = props.navigation;
  // console.log(dadosDoProduto)
  return (
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate({name:'ProdutoScreen', params:{
        dadosDoProduto: dadosDoProduto
      }}) 
    }}
    >
    <Card containerStyle={styles.card_style}>
      <Card.Image
        style={styles.imagens_cards}
        source={{uri:dadosDoProduto.imagemProduto}}
      />
      
      <Card.Title style={styles.titulo_cards}>{dadosDoProduto.nomeProduto}</Card.Title>
      <Text style={styles.descricao_cards}>{dadosDoProduto.descricaoProduto}</Text>
    </Card>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card_style: {
    backgroundColor: '#b4fb00',
    padding: 0,
    marginBottom: 50,
    width: 140,
    height: 150,
    borderRadius: 5,
    borderWidth: 0,
  },
  imagens_cards: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#b4fb00',
  },

  titulo_cards: {
    fontSize: 18,
    color: 'black',
  },
  descricao_cards: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  }
});
export default CardProduto;