import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';

import Arrow_left from '../../assets/img/arrow-left'

import Discussion from "../components1/discussion";

function Chat({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="white-content"
                backgroundColor="#041578"
                translucent={false}
            />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, backgroundColor: '#041578', paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#E6E8F2',
                    marginLeft: 20,
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Arrow_left />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>Créer un Business</Text>
            </View>
            <ScrollView
                style={{
                    width: '100%',
                }}
            >
                <View style={styles.items}>
                    <Discussion
                        image={require('../../assets/img1/profile6.png')}
                        name="Akono Fril"
                        message="Bonjour, tu t’es inscrit à l’évènement de ce Samedi?"
                        time="2 heures"
                        onPress={() => navigation.navigate('ChatDetails')}
                    />
                    <Discussion
                        image={require('../../assets/img1/profile6.png')}
                        name="Akono Fril"
                        message="Bonjour, tu t’es inscrit à l’évènement de ce Samedi?"
                        time="2 heures"
                        onPress={() => navigation.navigate('ChatDetails')}
                    />
                    <Discussion
                        image={require('../../assets/img1/profile6.png')}
                        name="Akono Fril"
                        message="Bonjour, tu t’es inscrit à l’évènement de ce Samedi?"
                        time="2 heures"
                        onPress={() => navigation.navigate('ChatDetails')}
                    />
                    <Discussion
                        image={require('../../assets/img1/profile6.png')}
                        name="Akono Fril"
                        message="Bonjour, tu t’es inscrit à l’évènement de ce Samedi?"
                        time="2 heures"
                        onPress={() => navigation.navigate('ChatDetails')}
                    />
                    <Discussion
                        image={require('../../assets/img1/profile6.png')}
                        name="Akono Fril"
                        message="Bonjour, tu t’es inscrit à l’évènement de ce Samedi?"
                        time="2 heures"
                        onPress={() => navigation.navigate('ChatDetails')}
                    />
                    <Discussion
                        image={require('../../assets/img1/profile6.png')}
                        name="Akono Fril"
                        message="Bonjour, tu t’es inscrit à l’évènement de ce Samedi?"
                        time="2 heures"
                        onPress={() => navigation.navigate('ChatDetails')}
                    />
                    <Discussion
                        image={require('../../assets/img1/profile6.png')}
                        name="Akono Fril"
                        message="Bonjour, tu t’es inscrit à l’évènement de ce Samedi?"
                        time="2 heures"
                        onPress={() => navigation.navigate('ChatDetails')}
                    />
                    <Discussion
                        image={require('../../assets/img1/profile6.png')}
                        name="Akono Fril"
                        message="Bonjour, tu t’es inscrit à l’évènement de ce Samedi?"
                        time="2 heures"
                        onPress={() => navigation.navigate('ChatDetails')}
                    />
                    <Discussion
                        image={require('../../assets/img1/profile6.png')}
                        name="Akono Fril"
                        message="Bonjour, tu t’es inscrit à l’évènement de ce Samedi?"
                        time="2 heures"
                        onPress={() => navigation.navigate('ChatDetails')}
                    />
                    <Discussion
                        image={require('../../assets/img1/profile6.png')}
                        name="Akono Fril"
                        message="Bonjour, tu t’es inscrit à l’évènement de ce Samedi?"
                        time="2 heures"
                        onPress={() => navigation.navigate('ChatDetails')}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
    },

    items: {
        flexDirection: 'column',

    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderWidth: 1,
        // borderColor: '#fff',
        borderBottomColor: '#E0E0E0',
        borderTopColor: '#fff',
    },
})

module.exports = Chat