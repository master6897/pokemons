import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    const modalDiv = document.getElementById('modal');
    return(
        ReactDOM.createPortal(
            <div onClick={props.onClick}>
                {props.children}
            </div>,
            modalDiv
        )
    )
}
export default Modal;