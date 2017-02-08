import React, { Component } from 'react'
import {
  TextInput,
  Text
} from 'react-native'

export default class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchBox: ""
    }
  }
  render(){
    return (
      <TextInput>
      </TextInput>
    )
  }
}
