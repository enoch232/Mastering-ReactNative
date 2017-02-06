/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BoxModel from './src/components/BoxModel'

export default class flexBox extends Component {
  render() {
    return (
      <View style = {styles.container} >
        <View style = {styles.item} >
          <Text></Text>
        </View>
        <View style = {[styles.item2, {flexShrink: 1}]} >
          <Text></Text>
        </View>
        <View style = {[styles.item2, {flexShrink: 2}]} >
          <Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "green"
  },
  item2: {
    width: 50,
    height: 200,
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "green"
  }
})

AppRegistry.registerComponent('flexBox', () => flexBox);
