import React, { Component, PropTypes } from 'react'
import {
  View,
  ListView,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  WebView
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
       dataSource: this.ds.cloneWithRows(props.books),
       modalVisible: false,
       book: {}
     }
     this.renderRow = this.renderRow.bind(this)
     this.onModalOpen = this.onModalOpen.bind(this)
     this.onModalClose = this.onModalClose.bind(this)
  }
  onModalOpen(book){
    this.setState({
      modalVisible: true,
      book: book
    })
  }
  onModalClose(){
    this.setState({
      modalVisible: false
    })
  }
  renderModal(){
    return(
      <Modal animationType="slide" visible={this.state.modalVisible} onRequestClose = {this.onModalClose}>
        <View style={styles.modalContent}>
          <Text style = {styles.modalTitle}>{this.state.book.title}</Text>
          <WebView source = {{uri: this.state.book.url }} scalesPageToFit/>
          <TouchableOpacity onPress={this.onModalClose} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
  render(){
    return (
      <View style =  {styles.bookList}>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
        {this.renderModal()}
      </View>
    )

  }
  renderRow(rowData, ...rest) {
     const index = parseInt(rest[1], 10);
     return (
        <Book style = {globalstyles.COMMON_STYLES.book} onPress = {() => this.onModalOpen({...rowData})} {...rowData} />
      )
  }

}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object)
}
const styles = StyleSheet.create({
  bookList: {
    marginTop: 20,
    backgroundColor: "#efe"
  },
  moreModal: {
    paddingTop:20
  },
  modalTitle: {
    textAlign: 'center'
  },
  modalContent: {
     flex: 1,
     justifyContent: 'center',
     paddingTop: 20,
     backgroundColor: globalstyles.BG_COLOR
  },
  closeButton: {
     flexDirection: 'column',
     justifyContent: "flex-end",
     alignItems: "center"
  }
})
