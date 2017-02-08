import React, { PropTypes, Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
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
        <TouchableOpacity onPress = {onPress} style = {styles.moreBtn}>
          <Text>Description</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  moreBtn: {
    padding: 10,
    backgroundColor: "#eee"
  }
})
