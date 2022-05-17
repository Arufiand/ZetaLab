import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Background from '../../components/Background' ;
import {Button as customButton }from '../../components/Button';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import CustomCard from '../../components/CustomCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localLabelStorage from '../../core/localLabelStorage';
import endpoint from '../../core/endpoint';
import Toast from 'react-native-toast-message';

const DashboardScreen = ({navigation}) => {
  const ep = new endpoint();
  const [fundData, useFundData] = useState([]);
  const [loading, setLoading] = useState(true);

  const showToast2 = () => {
    Toast.show({
      type: 'info',
      text1: 'Loading!',
    });
  }

  const getFundData = async() => {
      let token = await AsyncStorage.getItem(localLabelStorage.token);
      var config = {
        method: 'get',
        url: ep.funds_list(),
        headers: { 
          'Authorization': `Bearer ${token}` 
        }
      };
      axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data.models, null, 2));
        useFundData(response.data.data.models);
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getFundData();
    if (loading === true) {
      showToast2()
    }
  },[]);

  return (
    <Background>
      <ScrollView style = {styles.scrollView}>
          {fundData.length === 0 ? 
            null
            : 
            fundData.map(fund => {
              console.log(`fund per each ${JSON.stringify(fund.id, null,2)}`);
              return (
                <CustomCard 
                  stylesCard={styles.cardContainer} 
                  navigation={navigation}
                  detailView={false}
                  data={fund}
                  />
              )
              })
          }
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