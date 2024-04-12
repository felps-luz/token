import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { ModalTokens } from '../components/modal';

let caracteres = "0123456789"

export function Home() {

    const [qtde, defineQtde] = useState(6)
    const [telaModal, configTelaModal] = useState(false)
    const [tokenValue, configTokenValue] = useState("")

    function gerarToken() {
        let token = ""
        for (let i = 0, n = caracteres.length; i < qtde; i++) {
            token += caracteres.charAt(Math.floor(Math.random() * n))
        }
        configTokenValue(token);
        configTelaModal(true);
    }

    return (
        <View style={ESTILO.container}>
            <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
            <Text style={ESTILO.caracteres}>
                {qtde} algarismos
            </Text>
            <View style={ESTILO.area}>
                <Slider style={{ height: 50 }}
                    minimumValue={4}
                    maximumValue={9}
                    minimumTrackTintColor="#C7DFEF"
                    maximumTrackTintColor="#000"
                    thumbTintColor="#50B9FF"
                    value={qtde}
                    onValueChange={(value) => defineQtde(value.toFixed(0))}
                />
            </View>
            <TouchableOpacity style={ESTILO.button} onPress={gerarToken}>
                <Text style={ESTILO.buttonText}>
                    Gerar Senha
                </Text>
            </TouchableOpacity>
            <Modal visible={telaModal} animationType="fade" transparent={true}>
                <ModalTokens token={tokenValue} fechar={() => configTelaModal(false)} />
            </Modal>
        </View>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C7DFEF",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 60,
        height: 170,
        width: 200

    },
    area: {
        marginBottom: 14,
        marginTop: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8
    },
    button: {
        backgroundColor: "#50B9FF",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFF"
    },
    caracteres: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff"
    }
})