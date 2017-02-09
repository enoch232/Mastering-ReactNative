import React, { Component } from 'react'
import {
  Navigator,
  Text,
  View
} from 'react-native'

import Intro from './Intro'
import Home from './Home'

const INTRO = {title: 'intro', component: Intro, nextScene: HOME}
const HOME = {title: 'home', component: Home}
export default class Nav extends Component {
  renderScene(route, navigator){
    return (
      <route.component {...route.props} navigator = {navigator} />
    )
  }
  render(){
    return (
      <Navigator initialRoute = {INTRO} renderScene = {this.renderScene}>
      </Navigator>
    )
  }
}
