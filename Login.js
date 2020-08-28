import React from 'react';
import {Text,View } from 'react-native';

const login=(props)=>{
    return(
      <View>
        <Text style={{fontSize:20}}>login Screen</Text>
        <Text>{props.data2}</Text>
      </View>
  )
}
export default login;
