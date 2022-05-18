import { View, Text,Dimensions,ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import {
    LineChart
  } from "react-native-chart-kit";

const BarChart = ({xAxis, yAxis}) => {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    console.log(`Checking Data`)
    console.log(JSON.stringify(xAxis, null, 2));
    console.log(JSON.stringify(yAxis, null, 2));
    xAxis.length == 0 || yAxis.length == 0 ? 
    null
    :
    isLoading(false);
  }, [])

  return (loading == true ? 
    <View style={{flex: 1, padding: 20}}>
      <ActivityIndicator/>
     </View>  :
    <View>
    <LineChart
    data={{
      labels:xAxis,
      datasets: [
        {
          data: yAxis
        }
      ]
    }}
        width={(Dimensions.get("screen").width) - 85} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#61dafb",
          backgroundGradientTo: "#75dbfb",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
              borderRadius: 16
          },
          propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
    />
    </View>
  )
}

export default BarChart