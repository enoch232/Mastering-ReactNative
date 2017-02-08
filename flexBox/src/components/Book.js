import React, { PropTypes, Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

export default class Book extends Component {
  render(){
    const {
      onPress
    } = this.props;
    return(
      <View>
        <Text>Title: {this.props.title}</Text>
        <Text>Author: {this.props.author}</Text>
        <TouchableOpacity onPress = {onPress} style = {{padding:10, backgroundColor: "yellow"}}/>
      </View>
    )
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}
