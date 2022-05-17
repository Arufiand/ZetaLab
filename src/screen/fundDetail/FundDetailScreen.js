import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import Background from '../../components/Background' ;
import {Button as customButton }from '../../components/Button';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import CustomCard from '../../components/CustomCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localLabelStorage from '../../core/localLabelStorage';
import endpoint from '../../core/endpoint';



const FundDetailScreen = ({navigation,route}) => {
  const ep = new endpoint();
  const [fundDetail, setFundDetail] = useState([]);
  var numbro = require("numbro");

  useEffect(() => {
    getFundDetail();
    return () => {
      console.log(`cleaner`);
      setFundDetail([]);
    }
  }, [route])
  

  const getFundDetail = async() => {
    let token = await AsyncStorage.getItem(localLabelStorage.token);
    var config = {
      method: 'get',
      url: ep.funds_detail(route.params.fund_id),
      headers: { 
        'Authorization': `Bearer ${token}` 
      }
    };
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.data, null, 2));
      setFundDetail(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    <Background>
          <CustomCard 
            stylesCard={styles.cardContainer} 
            navigation={navigation} 
            detailView={true}
            data={fundDetail}
          />
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