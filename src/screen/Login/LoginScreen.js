import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Background from '../../components/Background' ;
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { emailValidator, passwordValidator } from '../../core/utils';
import { CommonActions } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Dashboard' }
        ],
      })
    );
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