import React from "react";
import { Modal, View, ActivityIndicator } from "react-native";

export default function Loading({visible}) {
    return (
        <Modal transparent visible={visible}>
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', /*marginBottom: -370*/ backgroundColor: '#b4fb00' }}>
                <ActivityIndicator
                    size="large"
                    color={'#4a09bb'}
                    animating={true}
                />
            </View>
        </Modal>
    );
}