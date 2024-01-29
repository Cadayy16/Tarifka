import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Secondary = () => {
  const list = useSelector(s => s.nameList);

  return (
    <View>
      <Text style={{color:"black", fontSize: 30}}>Secondary</Text>
      <FlatList
        data={list}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(_, index) =>index.toString()}
      />
    </View>
  )
}

export default Secondary