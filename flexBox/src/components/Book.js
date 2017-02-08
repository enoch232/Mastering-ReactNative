import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

export default class Book extends Component {
  render(){
    return(
      <View>
        <Text>Title: {this.props.title}</Text>
        <Text>Author: {this.props.author}</Text>
      </View>
    )
  }
}
