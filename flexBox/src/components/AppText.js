import React from 'react'
import {
  Text
} from 'react-native'
import * as globalstyles from '../styles/global'

const AppText = ({ children, style, ...rest}) => (
  <Text style = {[globalstyles.COMMON_STYLES.text], style, {marginTop: 30}} {...rest}>
    {children}
  </Text>
)

AppText.propTypes = {
  style: Text.propTypes.style,
  children: React.PropTypes.node
}

export default AppText
