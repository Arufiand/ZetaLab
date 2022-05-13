// import { View, Text } from 'react-native'
// import React from 'react'




// const index = () => {
    //   return (
        
//   )
// }

// export default index

import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';
import HomeScreen from './screen/Home/HomeScreen';
import LoginScreen from './screen/Login/LoginScreen';
import DashboardScreen from './screen/Dashboard/DashboardScreen';

const Stack = createNativeStackNavigator();
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[1]);
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[1]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden} />
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Login'
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name = "Home" component={HomeScreen}/>
                <Stack.Screen name = "Login" component={LoginScreen}/>
                <Stack.Screen name = "Dashboard" component={DashboardScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});

export default App;