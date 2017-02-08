import React, { Component } from 'react'
import {
  View,
  ListView
} from 'react-native'
import AppText from "./AppText"
import Book from "./Book"
import * as globalstyles from '../styles/global'

export default class BookList extends Component {
  constructor(props) {
     super(props);
     this.ds = new ListView.DataSource({
       rowHasChanged: (row1, row2) => row1.title !== row2.title
     })
     this.state = {
       dataSource: this.ds.cloneWithRows(props.books)
     }
   }
  render(){
    return (
      <View>
        <ListView
             dataSource={this.state.dataSource}
             renderRow={this.renderRow}
             />
      </View>
    )

  }
  renderRow(rowData, ...rest) {
     const index = parseInt(rest[1], 10);
     return (
        <Book
          {...rowData}
        />
    );
  }

}
