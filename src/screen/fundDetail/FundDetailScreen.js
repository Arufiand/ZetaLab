import { View, Text, StyleSheet,ScrollView, Dimensions,ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import Background from '../../components/Background' ;
import {Button as customButton }from '../../components/Button';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import CustomCard from '../../components/CustomCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import localLabelStorage from '../../core/localLabelStorage';
import endpoint from '../../core/endpoint';
import Toast from 'react-native-toast-message';

const FundDetailScreen = ({navigation,route}) => {
  const ep = new endpoint();
  const [fundDetail, setFundDetail] = useState([]);
  const [loading, isLoading] = useState(true);
  const [xAxis, setXAxis] = useState([]);
  const [yAxis, setYAxis] = useState([]);

  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Swipe the card',
      text2: 'Swipe to see the details!👋'
    });
  }

  useEffect(() => {
    getFundDetail();
    showToast();
    // return () => {
    //   console.log(`cleaner`);
    //   // setFundDetail([]);
    // }
  }, [])

  // useEffect(() => {
  //   if (fundDetail.length == 0) {
  //     isLoading(true);
  //   }
  //   else {
  //     isLoading(false)
  //   }
  // },[loading == true])

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
      // console.log(JSON.stringify(response.data.data, null, 2));
      setFundDetail(response.data.data);
      response.data.data.model.statistic_data.map(x => {
         setXAxis(prevState => ([...prevState, x.date]))
         setYAxis(prevState => ([...prevState, parseInt(x.latest_price)]))
      })
      isLoading(false)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  if(loading == true) {
   return(
    <View style={{flex: 1, padding: 20}}>
      <ActivityIndicator/>
    </View>
   ) 
  }
  else {
    return (
      <Background>
            <CustomCard 
              stylesCard={styles.cardContainer} 
              navigation={navigation} 
              detailView={true}
              data={fundDetail}
              xAxis = {xAxis}
              yAxis = {yAxis}
            />
      </Background>
    )
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    width: (Dimensions.get('screen').width) - 50,
    marginBottom : 30,
    height : (Dimensions.get('window').height) - 50
  },
  scrollView : {
    width : '115%'
  }
})

export default FundDetailScreen