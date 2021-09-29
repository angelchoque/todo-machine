import React from 'react'
import { TodoContext } from '../context/TodoContext'

import '../style/components/CreateTodoButton.css'

export const CreateTodoButton = () => {
    const {openModal, setOpenModal} = React.useContext(TodoContext)
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
