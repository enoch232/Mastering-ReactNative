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
  View,
  Image
} from 'react-native';
import BoxModel from './src/components/BoxModel'

export default class flexBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      height: 0,
      width: 0
    }
    this._onLayoutChange = this._onLayoutChange.bind(this)
  }
  _onLayoutChange(event){
    let { width, height } = event.nativeEvent.layout
    this.setState({height: height, width: width})
  }
  render() {
    return (
      <View onLayout = {this._onLayoutChange} style = {{marginTop: 30}}>
          <Text>Height: {this.state.height}</Text>
          <Text>Width: {this.state.width}</Text>
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
    borderColor: "green",
    color: "blue"
  },
})

AppRegistry.registerComponent('flexBox', () => flexBox);
