import React, { Component, PropTypes } from 'react'
import {
  View,
  ListView,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet
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
       modalVisible: false
     }
     this.renderRow = this.renderRow.bind(this)
     this.onModalOpen = this.onModalOpen.bind(this)
     this.onModalClose = this.onModalClose.bind(this)
  }
  onModalOpen(){
    this.setState({
      modalVisible: true
    })
  }
  onModalClose(){
    this.setState({
      modalVisible: false
    })
  }
  renderModal(){
    return(
      <Modal visible={this.state.modalVisible}
             onRequestClose = {this.onModalClose}
      >
        <Text>Hello</Text>
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={this.onModalClose}
            style={styles.closeButton}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
  render(){
    return (
      <View>
        <ListView
             dataSource={this.state.dataSource}
             renderRow={this.renderRow}
             />
        {this.renderModal()}
      </View>
    )

  }
  renderRow(rowData, ...rest) {
     const index = parseInt(rest[1], 10);
     return (
        <Book style = {globalstyles.COMMON_STYLES.book}
              onPress = {() => this.onModalOpen()}
              {...rowData}
        />
      )
  }

}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object)
}
const styles = StyleSheet.create({
  modalContent: {
     flex: 1,
     justifyContent: 'center',
     paddingTop: 20,
     backgroundColor: globalstyles.BG_COLOR
  },
   closeButton: {
     paddingVertical: 5,
     paddingHorizontal: 10,
     flexDirection: 'row'
  }
})
