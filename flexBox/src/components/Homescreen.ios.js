import React, { Component } from 'react'
import {
  TabBarIOS,
  Text
} from 'react-native'

import BookList from './BookList'
import Search from './Search'

export default class Homescreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      tab: 'booklist'
    }
  }
  render(){
    return (
      <TabBarIOS translucent={false}>
        <TabBarIOS.Item systemIcon = {'bookmarks'} onPress = {()=>this.setState({ tab: 'booklist' })} selected = {this.state.tab == 'booklist'}>
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
        </TabBarIOS.Item>
        <TabBarIOS.Item systemIcon = {'search'} onPress = {()=>this.setState({ tab: 'search'})} selected = {this.state.tab == 'search'}>
          <Search />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}
