import React from "react"
import CustomScrollbar from "../CustomScrollbar/CustomScrollbar"

import 'animate.css';

const OffCanvas = (props , ref) => {

  return (
        <div className={props.isShow ? `uk-offcanvas uk-offcanvas-overlay uk-open` : `uk-offcanvas`} style={props.isShow ? { display: "block" } : { display: "none" }}>
          <div onClick={props.onHide} className="offcanvas-overlay-hide"></div>
          <div ref={ref} className={props.isShow ? "uk-offcanvas-bar lg:w-4/12 w-full dark:bg-gray-700 dark:text-gray-300 p-0 uk-offcanvas-bar-animation uk-offcanvas-slide  animate__animated animate__fadeInRight" : "uk-offcanvas-bar lg:w-4/12 w-full dark:bg-gray-700 dark:text-gray-300 p-0"}>

            <button onClick={props.onHide} className="uk-offcanvas-close uk-icon uk-close" type="button" uk-close=""><svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></button>

            <div className="-mb-1 border-b font-semibold px-5 py-5 text-lg">
              <h4>{props.title} </h4>
            </div>

            <CustomScrollbar>
            <div style={{maxHeight:"90vh"}}>
            <div className="p-6 space-y-3 justify-text" >
              {props.children}
            </div> 
          </div>
            </CustomScrollbar>
          </div>
        </div>
  )
}

export default React.forwardRef(OffCanvas)