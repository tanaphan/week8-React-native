import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class Blackpink extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.v1}>
          <Text style={styles.t1}>SelPink In Your Area</Text>
        </View>
        
        <View style={styles.v2}>
          <Text style={styles.t1}>Ice-Cream</Text>
        </View>

        <View style={styles.v1}>
          <Text style={styles.t1}>Blackpink with Selena Gomaz</Text>
        </View>

      </View>
        
    )
  }
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'pink',
    flex:1,
    justifyContent:'center',
    alignItems:"stretch"
  },
  v1:{
    flex:1,
    backgroundColor:'orange'
  },
  t1:{
    fontSize:90,
    textAlign:'center'
  },
  v2:{
    flex:1,
    backgroundColor:'pink'
  }
}) 