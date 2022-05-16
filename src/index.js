import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';
import ProfileScreen from './screen/Profile/ProfileScreen';
import LoginScreen from './screen/Login/LoginScreen';
import FundDetailScreen from './screen/fundDetail/FundDetailScreen';
import DashboardScreen from './screen/Dashboard/DashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View 
    key={state.routes.key}
    style={{ flexDirection: 'row', height: '5%',backgroundColor: '#61dafb'}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityState={isFocused ? { selected: true } : {}}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, flexDirection:"row", height : '100%', justifyContent:"space-around", alignContent : "center", alignItems : "center" }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabsScreen = () => {
  return(
    <Tabs.Navigator screenOptions={{headerShown: false}} tabBar={(props) => <MyTabBar {...props} />}>
      <Tabs.Screen name="Dashboard" component={DashboardScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  )
}

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
        hidden={hidden}/>
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Login'
                screenOptions={{
                    headerShown: false
                }}>
                {/* <Stack.Screen name = "Home" component={ProfileScreen}/> */}
                <Stack.Screen name = "Login" component={LoginScreen}/>
                <Stack.Screen name = "DashboardWithTabs" component={TabsScreen}/>
                <Stack.Screen name = "FundDetail" component={FundDetailScreen}/>
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