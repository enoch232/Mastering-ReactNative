import React, { Component } from 'react'
import {
  TextInput,
  Text,
  View,
  StyleSheet
} from 'react-native'

import * as globalstyles from '../styles/global'
export default class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchBox: ""
    }
  }
  render(){
    return (
      <View style={globalstyles.COMMON_STYLES.pageContainer}>
         <View style={styles.search}>
          <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ searchBox: text })}
          value = {this.state.searchBox}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    color: globalstyles.TEXT_COLOR,
    paddingHorizontal: 5,
    flex: 1
  },
  search: {
    borderColor: globalstyles.MUTED_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5
 }
});
