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
  Image,
  TouchableOpacity
} from 'react-native';
import BoxModel from './src/components/BoxModel'
import AppText from './src/components/AppText'
import BookList from './src/components/BookList'

export default class flexBox extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <BookList books = {[{title: "First Book", author: "Enoch Ko"}, {title: "Second Book", author: "Jaemin Ko"}]}/>
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
