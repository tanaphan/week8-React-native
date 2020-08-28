import React,{Component} from 'react';
import {Text,View} from 'react-native';

export default class Blackpink extends Component{
  render(){
    return(
      <View style={{backgroundColor:'pink',flex:1,justifyContent:'center',alignItems:"stretch"}}>
        <View style={{flex:1,backgroundColor:'orange'}}>
          <Text style={{fontSize:90,textAlign:'center'}}>SelPink In Your Area</Text>
        </View>
        
        <View style={{flex:1,backgroundColor:'pink'}}>
          <Text style={{fontSize:90,textAlign:'center'}}>SelPink In Your Area</Text>
        </View>

        <View style={{flex:1,backgroundColor:'orange'}}>
          <Text style={{fontSize:90,textAlign:'center'}}>SelPink In Your Area</Text>
        </View>
        
      </View>
        
    )
  }
}