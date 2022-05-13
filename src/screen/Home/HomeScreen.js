import { View, Text } from 'react-native'
import React from 'react'
import Background from '../../components/Background' ;
import Button from '../../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <Background>
      <Text>Home</Text>
        <Button mode="contained" onPress={() => navigation.navigate('Login')}>
          Login
        </Button>
    </Background>
  )
}

export default HomeScreen