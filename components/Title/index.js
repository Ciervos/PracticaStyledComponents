import React from 'react'
import {TitleSty} from './style'

function Title({content, color}) {
  return (<TitleSty color={color}>{content}</TitleSty>)
}

export default Title;