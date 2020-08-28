import React,{Component} from 'react'
import { View,Text } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name:"Leo",
      name2:"Luca"
    }
  }
  render(){
    let title="Hello",
    <View>
      <Text>{title}</Text>
      <Text>{ this.state.name } and { this.state.name2 }</Text>
    </View>
  }
}
export default App;