import React from "react";
import ReactDOM from "react-dom";

import '../style/modal/modal.css'

export function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='modal'>
            {children}
        </div>,
        document.getElementById('modal')
    )
}