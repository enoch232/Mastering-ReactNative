import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import {increment, decrement, reset} from '../actions/actions'
import store from '../reducers/store'

export default class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: store.getState()
    }
  }
  render(){
    return (
      <View style = {styles.counterContainer}>
        <View>
         <Text>{this.state.count.count}</Text>
        </View>
        <TouchableOpacity onPress = {()=> store.dispatch(increment())}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {()=> store.dispatch(decrement())}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
 const styles = StyleSheet.create({
   counterContainer: {
     marginTop: 20
   }
 })
