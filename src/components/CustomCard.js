import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const CustomCard = ({stylesCard, navigation, detailView,data}) => {
  var numbro = require("numbro");
  const LeftContent = props => <Avatar.Text {...props} icon="folder" />
  // let minumumFund = data.minimum_fund;
  // console.log(JSON.stringify(data, null, 2));
  return (
    
      <View>
        {detailView ? 
          <Card style={stylesCard}>
              <Card.Title title={data.model.name} subtitle={data.model.description} left={LeftContent} />
              <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Actions>
                <View style={{flexDirection:"row", flex : 1, justifyContent: "space-between"}}>
                  <View style ={{flexDirection:"column", marginRight:5}}>
                    <Title style ={{fontSize : 13}}>1 Year Return</Title>
                    <Paragraph style ={{fontSize : 14}}>{
                        numbro(23425.45).format({
                          average: true,  totalLength: 3
                        })
                      }
                      </Paragraph>
                  </View>             
                  <View style ={{flexDirection:"column", marginRight:5}}>
                    <Title style ={{fontSize : 13}}>Expense Ratio</Title>
                    <Paragraph style ={{fontSize : 14}}>{
                        numbro(23425.45).format({
                          average: true,  totalLength: 3
                        })
                      }
                      </Paragraph>
                  </View>                
                  <View style ={{flexDirection:"column", marginRight:5}}>
                    <Title style ={{fontSize : 13}}>Total AUM</Title>
                    <Paragraph style ={{fontSize : 14}}>{
                        numbro(23425.45).format({
                          average: true,  totalLength: 3
                        })
                      }
                      </Paragraph>
                  </View>
                </View>
              </Card.Actions>
          </Card>
        : 
        <Card style={stylesCard} onPress={()=> {navigation.navigate("FundDetail", {fund_id : data.id})}}>
        <Card.Title title={data.name} subtitle={data.description} left={LeftContent} />
        {/* <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
        </Card.Content> */}
        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
        <Card.Actions>
          <View style={{flexDirection:"row", flex : 1, justifyContent: "space-between"}}>
            <View style ={{flexDirection:"column", marginRight:5}}>
              <Title style ={{fontSize : 13}}>Lock in Period</Title>
              <Paragraph style ={{fontSize : 14}}>{
                  data.lock_in_period
                } months
                </Paragraph>
            </View>             
            <View style ={{flexDirection:"column", marginRight:5}}>
              <Title style ={{fontSize : 13}}>Minimum Fund</Title>
              <Paragraph style ={{fontSize : 14}}>{
                  numbro(data.minimum_fund).formatCurrency()
                }
                </Paragraph>
            </View>                
            <View style ={{flexDirection:"column", marginRight:5}}>
              <Title style ={{fontSize : 13}}>Total Units</Title>
              <Paragraph style ={{fontSize : 14}}>{
                  numbro(data.total_units).format({
                    average: true,  totalLength: 3
                  })
                }
                </Paragraph>
            </View>
          </View>
        </Card.Actions>
    </Card>
        }
      </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
      width: '100%',
      marginBottom : 50
  },
})
export default CustomCard
