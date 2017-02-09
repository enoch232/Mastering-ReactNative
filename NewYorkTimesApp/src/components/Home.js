import React, { Component } from 'react'
import {
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native'

export default class Home extends Component {
  render(){
    return (
      <View>
        <Text>
          Home
        </Text>
        <TouchableOpacity onPress = {()=> this.props.navigator.pop()}><Text>Back to Intro</Text></TouchableOpacity>
      </View>
    )
  }
}
