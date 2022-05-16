import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const CustomCard = ({stylesCard, navigation, detailView}) => {
  var numbro = require("numbro");
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  return (
    
      <View>
        {detailView ? 
          <Card style={stylesCard} onPress={()=> {navigation.navigate("FundDetail")}}>
              <Card.Title title="Fund Name Detailed" subtitle="Fund Description" left={LeftContent} />
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
        <Card style={stylesCard} onPress={()=> {navigation.navigate("FundDetail")}}>
        <Card.Title title="Fund Name" subtitle="Fund Description" left={LeftContent} />
        {/* <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
        </Card.Content> */}
        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
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
