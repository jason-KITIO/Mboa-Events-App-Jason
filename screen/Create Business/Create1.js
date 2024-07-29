import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';

const Create2 = require('./Create2')
import Musique from '../../assets/img/Vector (2)'
import Basket from '../../assets/img/2476154'
import Nouriture from '../../assets/img/685352'
import Calendar_edit from '../../assets/img/calendar-edit'
import Document_upload from '../../assets/img/document-upload'
import Map from '../../assets/img/map'

function Feed({ navigation },) {
    const [fontsLoaded] = useFonts({
        'TitilliumWeb-Regular': require('../../assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf'),
        'TitilliumWeb-Bold': require('../../assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null; // ou un écran de chargement
    }

    const [isToggled, setIsToggled] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const handleToggle = () => {
        setIsToggled(!isToggled);
        Animated.spring(animation, {
            toValue: isToggled ? 0 : 1,
            useNativeDriver: false,
        }).start();
    };

    const circleColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#fff', '#fff']
    });

    const trackColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E2E8F0', '#041578'] // Gris clair à vert clair
    });

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 8]
    });

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
            <View style={styles.categorie}>
                <Text style={styles.titre}>Catégorie d’évènement</Text>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
                    // backgroundColor: 'red',
                }}>
                    <View style={styles.categorie_menu_actif}>
                        <Musique />
                        <Text style={styles.categorie_menu_titre_actif}>Musique</Text>
                    </View>
                    <View style={styles.categorie_menu}>
                        <Basket />
                        <Text style={styles.categorie_menu_titre}>Sports</Text>
                    </View>
                    <View style={styles.categorie_menu}>
                        <Nouriture />
                        <Text style={styles.categorie_menu_titre}>Nourritures</Text>
                    </View>
                    <View style={styles.categorie_menu}>
                        <Nouriture />
                        <Text style={styles.categorie_menu_titre}>Nourritures</Text>
                    </View>
                </ScrollView>

                <View style={styles.column}>
                    <Text style={styles.titre}>Nom de l'établissement</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Mariage de Aline & Christian"
                    />
                </View>
                <View style={styles.column}>
                    <Text style={styles.titre}>Description</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Tapez la description ici"
                        multiline={true} // Permet le texte multi-ligne
                        numberOfLines={4} // Nombre de lignes visibles
                        textAlignVertical="top" // Aligne le texte en haut
                    />
                </View>
                <View>
                    <Text style={styles.titre}>Horaires d’ouvertures</Text>
                    <View style={styles.column}>
                        <View style={styles.horaires_view}>
                            <TouchableOpacity style={[styles.horaires, styles.horaires_date]} onPress={handleToggle}>
                                <Text style={styles.titre}>Lundi</Text>
                                <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
                                    <Animated.View style={[styles.toggleTrack, { backgroundColor: trackColor }]} />
                                    <Animated.View
                                        style={[
                                            styles.toggleCircle,
                                            { backgroundColor: circleColor, transform: [{ translateX }] }
                                        ]}
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <View style={styles.horaires}>
                                <Text style={styles.horaires_texte}>08h00-18h00</Text>
                                <Calendar_edit />
                            </View>
                        </View>
                        <View style={styles.horaires_view}>
                            <TouchableOpacity style={[styles.horaires, styles.horaires_date]} onPress={handleToggle}>
                                <Text style={styles.titre}>Lundi</Text>
                                <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
                                    <Animated.View style={[styles.toggleTrack, { backgroundColor: trackColor }]} />
                                    <Animated.View
                                        style={[
                                            styles.toggleCircle,
                                            { backgroundColor: circleColor, transform: [{ translateX }] }
                                        ]}
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <View style={styles.horaires}>
                                <Text style={styles.horaires_texte}>08h00-18h00</Text>
                                <Calendar_edit />
                            </View>
                        </View>
                        <View style={styles.horaires_view}>
                            <TouchableOpacity style={[styles.horaires, styles.horaires_date]} onPress={handleToggle}>
                                <Text style={styles.titre}>Lundi</Text>
                                <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
                                    <Animated.View style={[styles.toggleTrack, { backgroundColor: trackColor }]} />
                                    <Animated.View
                                        style={[
                                            styles.toggleCircle,
                                            { backgroundColor: circleColor, transform: [{ translateX }] }
                                        ]}
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <View style={styles.horaires}>
                                <Text style={styles.horaires_texte}>08h00-18h00</Text>
                                <Calendar_edit />
                            </View>
                        </View>
                        <View style={styles.horaires_view}>
                            <TouchableOpacity style={[styles.horaires, styles.horaires_date]} onPress={handleToggle}>
                                <Text style={styles.titre}>Lundi</Text>
                                <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
                                    <Animated.View style={[styles.toggleTrack, { backgroundColor: trackColor }]} />
                                    <Animated.View
                                        style={[
                                            styles.toggleCircle,
                                            { backgroundColor: circleColor, transform: [{ translateX }] }
                                        ]}
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <View style={styles.horaires}>
                                <Text style={styles.horaires_texte}>08h00-18h00</Text>
                                <Calendar_edit />
                            </View>
                        </View>
                        <View style={styles.horaires_view}>
                            <TouchableOpacity style={[styles.horaires, styles.horaires_date]} onPress={handleToggle}>
                                <Text style={styles.titre}>Lundi</Text>
                                <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
                                    <Animated.View style={[styles.toggleTrack, { backgroundColor: trackColor }]} />
                                    <Animated.View
                                        style={[
                                            styles.toggleCircle,
                                            { backgroundColor: circleColor, transform: [{ translateX }] }
                                        ]}
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <View style={styles.horaires}>
                                <Text style={styles.horaires_texte}>08h00-18h00</Text>
                                <Calendar_edit />
                            </View>
                        </View>
                        <View style={styles.horaires_view}>
                            <TouchableOpacity style={[styles.horaires, styles.horaires_date]} onPress={handleToggle}>
                                <Text style={styles.titre}>Lundi</Text>
                                <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
                                    <Animated.View style={[styles.toggleTrack, { backgroundColor: trackColor }]} />
                                    <Animated.View
                                        style={[
                                            styles.toggleCircle,
                                            { backgroundColor: circleColor, transform: [{ translateX }] }
                                        ]}
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <View style={[styles.horaires, styles.horaires_close]}>
                                <Text style={styles.horaires_texte}>Fermé</Text>
                            </View>
                        </View>
                        <View style={styles.horaires_view}>
                            <TouchableOpacity style={[styles.horaires, styles.horaires_date]} onPress={handleToggle}>
                                <Text style={styles.titre}>Lundi</Text>
                                <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
                                    <Animated.View style={[styles.toggleTrack, { backgroundColor: trackColor }]} />
                                    <Animated.View
                                        style={[
                                            styles.toggleCircle,
                                            { backgroundColor: circleColor, transform: [{ translateX }] }
                                        ]}
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <View style={[styles.horaires, styles.horaires_close]}>
                                <Text style={styles.titre}>Fermé</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: 26,
        gap: 16,
        backgroundColor: '#fff'
    },
    categorie: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    },
    categorie_menu_actif: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#041578',
        borderRadius: 20,
        gap: 8,
        alignItems: 'center',
        marginRight: 12
    },
    categorie_menu_titre_actif: {
        color: '#fff'
    },
    categorie_menu: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#E6E8F2',
        borderRadius: 20,
        gap: 8,
        alignItems: 'center',
        marginRight: 12
    },
    categorie_menu_titre: {
        color: '#041578'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
    },
    input: {
        height: 50,
        width: '100%',
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        backgroundColor: '#F5F5F6',
        borderRadius: 8
    },
    textArea: {
        height: 170,
        width: '100%',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
    },
    horaires_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8
    },
    horaires: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F6',
        width: 150,
        height: 50,
        padding: 8,
        borderRadius: 8
    },
    horaires_date: {
        width: 220,
    },
    toggleButton: {
        width: 24,
        height: 16,
        borderRadius: 15,
        justifyContent: 'center',
    },
    toggleTrack: {
        width: 24,
        height: 16,
        borderRadius: 15,
        position: 'absolute',
    },
    toggleCircle: {
        width: 12,
        height: 12,
        borderRadius: 13,
        position: 'absolute',
        left: 2,
    },
    horaires_close: {
        backgroundColor: '#FEE9E9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    horaires_texte: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21.29,
        textAlign: 'left',
        color: '#767A90'
    }
});

module.exports = Feed