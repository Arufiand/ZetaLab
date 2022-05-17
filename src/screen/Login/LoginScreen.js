import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Background from '../../components/Background' ;
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { emailValidator, passwordValidator } from '../../core/utils';
import { CommonActions } from '@react-navigation/native';
import localLabelStorage from '../../core/localLabelStorage';
import axios from 'axios';
import endpoint from '../../core/endpoint';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const ep = new endpoint();

  const [email, setEmail] = useState({ value: 'dev@ortegacapital.com', error: '' });
  const [password, setPassword] = useState({ value: 'DevTest123', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    var data = JSON.stringify({
      "email": email.value,
      "password": password.value
    });
    
    var config = {
      method: 'post',
      url: ep.login(),
      headers: { 
        'Content-Type': 'application/json', 
        'Cookie': 'sesh=tNElQKA8oAJJOnAfSIRmClkv7e2aHOom'
      },
      data : data
    };

    axios(config)
    .then(async response => {
      // console.log(JSON.stringify(response.data.data.token, null, 2));
      try {
        await AsyncStorage.setItem(localLabelStorage.token, response.data.data.token.access_token)
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'DashboardWithTabs' }
            ],
          })
        );
      } catch (e) {
        console.log(`Error on Saving to AsyncStorage ${JSON.stringify(e, null, 2)}`)
      }
      
    })
    .catch(function (error) {
      console.log(`Error while posting login ${JSON.stringify(error,null,2)}`);
    })

  };

  return (
    <Background>
        <Text>Login Screen</Text>
        <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>
    </Background>
  )
}

export default LoginScreen