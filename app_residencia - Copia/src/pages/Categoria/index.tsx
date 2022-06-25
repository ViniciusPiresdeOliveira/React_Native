import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

const Categorias = () => {
    return (
        <View style={styles.container}>
            <Text>
                Categoria
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0e',
        padding: 16,
        alignItems: 'stretch',
        justifyContent: 'center',
      }
})

export default Categorias;