import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Background from '../../components/Background' ;
import {Button as customButton }from '../../components/Button';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import CustomCard from '../../components/CustomCard';


const DashboardScreen = () => {
  var numbro = require("numbro");
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <Background>
      <ScrollView style = {styles.scrollView}>
          <CustomCard stylesCard={styles.cardContainer}/>
          <CustomCard stylesCard={styles.cardContainer}/>
          <CustomCard stylesCard={styles.cardContainer}/>
          <CustomCard stylesCard={styles.cardContainer}/>
          <CustomCard stylesCard={styles.cardContainer}/>
          <CustomCard stylesCard={styles.cardContainer}/>
          <CustomCard stylesCard={styles.cardContainer}/>
      </ScrollView>
    </Background>
  )
}
const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    width: '100%',
    marginBottom : 30,
    // height : '70%'
  },
  scrollView : {
    width : '115%'
  }
})

export default DashboardScreen