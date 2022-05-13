import { View, Text } from 'react-native'
import React from 'react'
import Router from './src/index'
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'


const App = () => {
  return (
    <Provider theme={theme}>
      <Router />
    </Provider>
  )
}

export default App