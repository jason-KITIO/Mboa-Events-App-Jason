import React from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Confetis from "../../assets/icons/confetis";
import Success from "../../assets/icons/success";


const CreateSuccessDesign = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="white-content"
                backgroundColor="#041578"
                translucent={false}
            />

            <ImageBackground
                style={styles.background}
            >
                <View style={styles.confettiContainer}>
                    <Confetis />
                </View>
            </ImageBackground>

            <View style={styles.success}>
                <Success />

                <View style={{ alignItems: 'center', }}>
                    <Text style={{ color: '#1E2448', fontSize: 24, fontWeight: '700', }}>Félicitations</Text>
                    <Text style={{ color: '#1E2448', fontSize: 16, }}>Votre evenement a été creer</Text>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#041578', }]} onPress={() => navigation.navigate('TopNavigator')}>
                        <Text style={{ fontSize: 16, color: '#fff', fontWeight: '700', }}>Retour aux evenements</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#E6E8F2', }]}>
                        <Text style={{ fontSize: 16, color: '#041578', fontWeight: '700', }}>Partager</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

module.exports = CreateSuccessDesign

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#041578',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    success: {
        flexDirection: 'column',
        gap: 32,
        position: 'absolute',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 30,
        width: '100%',
        borderRadius: 16,
    },

    buttons: {
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        width: '100%',
    },

    button: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 16,
        borderRadius: 8,
    },
})