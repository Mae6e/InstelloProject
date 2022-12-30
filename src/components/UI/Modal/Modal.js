import React, { useRef } from "react"
import 'animate.css'

const Modal = (props) => {

    const modalRef = useRef()

    if (props.isShown) {
        modalRef.current.style.display = "block"
    }

    const closeModalHandler = () => {
        props.onClose()
        setTimeout(() => {
            modalRef.current.style.display = "none"
        }, 200);
    }

    return (
        <div id="story-modal" ref={modalRef} className={props.isShown ? "uk-modal-container uk-modal uk-open" : "uk-modal-container uk-modal"} >
            <div className={props.isShown ? "animate__animated animate__fadeInDown animate__faster uk-modal-dialog story-modal" : "animate__animated animate__fadeInUp uk-modal-dialog story-modal"} >
                <button className="uk-modal-close-default lg:-mt-9 lg:-mr-9 -mt-5 -mr-5 shadow-lg bg-white rounded-full p-4 transition dark:bg-gray-600 dark:text-white uk-icon uk-close"
                    onClick={closeModalHandler} type="button" uk-close=""><svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></button>
                {props.children}
            </div>
        </div>)
}
export default Modal