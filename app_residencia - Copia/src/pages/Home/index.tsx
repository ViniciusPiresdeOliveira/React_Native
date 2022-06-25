import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
import { Text, Card } from 'react-native-elements';

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <ScrollView style={styles.scroll_categorias} horizontal={true}>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 1 foi clicada')}
                    style={styles.botao_categoria}
                >
                    <View style={styles.view_itens_categoria}>
                        <Text style={styles.texto_nome_categoria} >{'Categorias 1'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 2 foi clicada')}
                    style={styles.botao_categoria}

                >
                    <View style={styles.view_itens_categoria}>
                        <Text style={styles.texto_nome_categoria} >{'Categorias 2'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 3 foi clicada')}
                    style={styles.botao_categoria}

                >
                    <View style={styles.view_itens_categoria}>
                        <Text style={styles.texto_nome_categoria} >{'Categorias 3'}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log('Categoria 4 foi clicada')}
                    style={styles.botao_categoria}

                >
                    <View style={styles.view_itens_categoria}>
                        <Text style={styles.texto_nome_categoria} >{'Categorias 4'}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <Text>{'Recentes'}</Text>
            <ScrollView horizontal={true}>
                <Card>
                    <Card.Image source={require('../../assets/macarrao.jpg')} />
                    <Card.Divider />
                    <Card.Title>
                        Macarrão
                    </Card.Title>
                    <Text>Macarrão com molho de tomate</Text>
                </Card>
                <Card>
                    <Card.Image source={require('../../assets/macarrao.jpg')} />
                    <Card.Divider />
                    <Card.Title>
                        Macarrão
                    </Card.Title>
                    <Text>Macarrão com molho de tomate</Text>
                </Card>
                <Card>
                    <Card.Image source={require('../../assets/macarrao.jpg')} />
                    <Card.Divider />
                    <Card.Title>
                        Macarrão
                    </Card.Title>
                    <Text>Macarrão com molho de tomate</Text>
                </Card>
                <Card>
                    <Card.Image source={require('../../assets/macarrao.jpg')} />
                    <Card.Divider />
                    <Card.Title>
                        Macarrão
                    </Card.Title>
                    <Text>Macarrão com molho de tomate</Text>
                </Card>
            </ScrollView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b4fb00',
        padding: 30,
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
    }
});

export default Home;
