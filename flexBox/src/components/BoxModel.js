import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

export default class BoxModel extends Component {
  render(){
    return(
      <View style = {styles.container} >
        <View style = {styles.item} >
          <Text></Text>
        </View>
        <View style = {styles.item} >
          <Text></Text>
        </View>
        <View style = {styles.item} >
          <Text></Text>
        </View>
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "green"
  }
})
