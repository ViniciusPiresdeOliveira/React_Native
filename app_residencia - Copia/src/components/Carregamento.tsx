import React from "react";
import { Modal, View, ActivityIndicator } from "react-native";

export default function Loading({visible}) {
    return (
        <Modal transparent visible={visible}>
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', marginBottom: -370 }}>
                <ActivityIndicator
                    size="large"
                    color={"blue"}
                    animating={true}
                />
            </View>
        </Modal>
    );
}