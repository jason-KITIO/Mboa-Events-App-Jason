import * as React from 'react';
import { useFonts } from 'expo-font';
import { Button, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Create1 = require('./screen/Create Business/Create1');
const Create2 = require('./screen/Create Business/Create2');
const Create3 = require('./screen/Create Business/Create3');
const Create4 = require('./screen/Create Business/Create4');
const Create5 = require('./screen/Create Business/Create5');
const Create6 = require('./screen/Create Business/Create6');
const Create7 = require('./screen/Create Business/Create7');
const Create8 = require('./screen/Create Business/Create8');
const Create9 = require('./screen/Create Business/Create9');

const Dashboard = require('./screen/Create Business & Dashboard/Dashboard')
const listeBusiness = require('./screen/Create Business & Dashboard/listeBusiness')
const listeBusinessEmpty = require('./screen/Create Business & Dashboard/listeBusinessEmpty')

const Statistiques = require('./screen/Events Stats/Statistiques')

const Event_Search_Events_10 = require('./screen/Send message to participants/Event Search Events 10')
const Events = require('./screen/Send message to participants/Events')
const Events_Details = require('./screen/Send message to participants/Events Details')
const List_of_participants = require('./screen/Send message to participants/List of participants')
const Send_message_popup = require('./screen/Send message to participants/Send message popup')
const Successful = require('./screen/Send message to participants/Successful')

import Arrow_left from './assets/img/arrow-left'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function Messages() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages Screen</Text>
    </View>
  );
}

// Composants pour les écrans stack
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Create1"
        component={Create1}
        options={{
          headerTitle: 'Créer un Business',
          headerStyle: {
            backgroundColor: '#041578',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'TitilliumWeb-Regular',
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View style={styles.fleche}>
              <Arrow_left />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}



export default function App() {
  const [fontsLoaded] = useFonts({
    'TitilliumWeb-Regular': require('./assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf'),
    'TitilliumWeb-Bold': require('./assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // ou un écran de chargement
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Create1">
        <Stack.Screen
          name="Create1"
          component={Create1}
          options={{
            headerTitle: 'Créer un Business',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
          }} />
        <Stack.Screen name="Create2" component={Create2} options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'TitilliumWeb-Regular',
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#000"
            />
          ),
        }} />
        {/* <Stack.Screen name="Create3" component={Create3} />
        <Stack.Screen name="Create4" component={Create4} />
        <Stack.Screen name="Create5" component={Create5} />
        <Stack.Screen name="Create6" component={Create6} />
        <Stack.Screen name="Create7" component={Create7} />
        <Stack.Screen name="Create8" component={Create8} />
        <Stack.Screen name="Create9" component={Create9} /> */}

        {/* <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="listeBusiness" component={listeBusiness} />
        <Stack.Screen name="listeBusinessEmpty" component={listeBusinessEmpty} /> */}

        {/* <Stack.Screen name="Statistiques" component={Statistiques} /> */}

        {/* <Stack.Screen name="Event_Search_Events_10" component={Event_Search_Events_10} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Events_Details" component={Events_Details} />
        <Stack.Screen name="List_of_participants" component={List_of_participants} />
        <Stack.Screen name="Send_message_popup" component={Send_message_popup} />
        <Stack.Screen name="Successful" component={Successful} /> */}

        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fleche: {
    width: 40,
    height: 40,
    backgroundColor: '#E6E8F2',
    marginLeft: 20,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});