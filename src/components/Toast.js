import { StyleSheet, Text, View } from 'react-native'
import React, {memo} from 'react'
import Toast from 'react-native-toast-message';

const showToast = ({type, text1, text2}) => {
    Toast.show({
        type: type,
        text1 : text1,
        text2 : text2,
        visibilityTime : 4000,
        autoHide : true,
    })
}

const Toast = ({}) => {
  return (
    <Toast config={showToast} />
  )
}

export default memo(Toast)
