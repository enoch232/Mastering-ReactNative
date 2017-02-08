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
      <BookList books = {
        [
          {
            title: "Will it fly?",
            author: "Pat Flynn",
            description: "Stop rushing into businesses born from half-baked ideas, misguided theories, and other forms of self-delusion. A lack of proper validation kills more businesses than anything else",
            url: "https://www.amazon.com/Will-Test-Business-Waste-Money/dp/0997082305"},
          {
            title: "The 21 Irrefutable Laws of Leadership",
            author: "John C. Maxwell",
            description: "The 21 Irrefutable Laws of Leadership: Follow Them and People Will Follow You is a 1998 book written by John C. Maxwell and published by Thomas Nelson. It is one of several books by Maxwell on the subject of leadership",
            url: "https://www.amazon.com/21-Irrefutable-Laws-Leadership-Anniversary/dp/0785288376/ref=sr_1_1?ie=UTF8&qid=1486574732&sr=8-1&keywords=the+21+irrefutable+laws+of+leadership"
          }
        ]
      }/>
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
