import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export function CaixaToken({token, removerToken}) {
    return (
        <Pressable style={ESTILOS.caixa} onLongPress={removerToken}>
            <Text style={ESTILOS.text}>
                {token}
            </Text>
            <ion-icon name="trash-outline"></ion-icon>
        </Pressable>
    )
}

const ESTILOS = StyleSheet.create({
    caixa:{
        backgroundColor:"#50B9FF",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius:8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        color:"#fff",
        fontWeight: "bold"
    }
    
})