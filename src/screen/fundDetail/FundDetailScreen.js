import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Background from '../../components/Background' ;
import {Button as customButton }from '../../components/Button';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import CustomCard from '../../components/CustomCard';


const FundDetailScreen = ({navigation}) => {
  var numbro = require("numbro");
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <Background>
          <CustomCard stylesCard={styles.cardContainer} navigation={navigation} detailView={true}/>
    </Background>
  )
}
const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    width: 300,
    marginBottom : 30,
    height : 400
  },
  scrollView : {
    width : '115%'
  }
})

export default FundDetailScreen