import React from 'react'
import CustomScroll from 'react-custom-scroll'

import './customscrollbar.css'

const CustomScrollbar = (props) => {
  return (
    <CustomScroll>
      {props.children}
    </CustomScroll>
  )
}

export default CustomScrollbar
