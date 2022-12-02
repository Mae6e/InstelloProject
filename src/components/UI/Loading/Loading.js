import React from "react";
import ReactLoading from 'react-loading';

const Loading = (props) => (
   <div className={`loading ${props.className}`} style={props.style} >
   <ReactLoading  color="#be185d" type="bars" height={50} width={50} />
   </div>

);

export default Loading