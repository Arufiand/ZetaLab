import { View, Text } from 'react-native'
import React from 'react'
import Router from './src/index'
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider theme={theme}>
      <Router />
      <Toast
        position='bottom'
        bottomOffset={50}
      />
    </Provider>
  )
}

export default App