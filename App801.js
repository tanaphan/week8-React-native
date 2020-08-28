import React, { Component } from 'react'
import { View,Text } from 'react-native'

class Cat extends Component{
  constructor (props){
    super(props)
      this.state={
        title:"Ice Cream",
        title2:"Hello My Cat"
      }
    }
  render(){
    return(
      <View>
        <Text>{ this.state.title }</Text>
        <Text>{ this.state.title2 }</Text>
      </View>
    )
  }
}
export default Cat;