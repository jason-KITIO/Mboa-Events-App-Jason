import { Button, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* Votre contenu ici */}
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const Create2 = require('./Create2')

function Feed({ navigation },) {
    return (
        <SafeAreaView>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text>create1 Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});

module.exports = Feed