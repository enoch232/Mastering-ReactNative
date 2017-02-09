import React, { Component } from 'react'
import {
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native'
import Home from './Home'

export default class Intro extends Component {
  render(){
    return (
      <View>
        <Text>Intro Page</Text>
        <TouchableOpacity onPress = {()=>this.props.navigator.push({title: 'home', component: Home})}><Text>Next Page</Text></TouchableOpacity>
      </View>
    )
  }
}
