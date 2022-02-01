import React from 'react'

import '../style/components/CreateTodoButton.css'

export const CreateTodoButton = ({ openModal, setOpenModal }) => {
    const onClickButton = () => setOpenModal(!openModal)
    return (
        <div>
            <button 
                className={openModal ? 'button-add button-add--active' : 'button-add'}
                onClick={onClickButton} 
            >+</button>
        </div>
    )
}
