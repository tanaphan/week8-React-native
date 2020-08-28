import React, { Component } from 'react';
import {Text, View } from 'react-native';

class Blackpink extends Component{
constructor(props){
  super(props)
    this.state={
      name2:"with Selena Gomez",
      name3:"BlackPink"
    }
}
render(){
  let title="Ice-Cream"
return (
  <View>
    <Text>{title}</Text>
    <Text>{this.state.name3} and {this.state.name2}</Text>
  </View>
)
}
}
export default Blackpink;