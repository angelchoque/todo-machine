import React from 'react'

import '../style/components/CreateTodoButton.css'

export const CreateTodoButton = () => {
    const handleClick = () => {
        console.log('click')
    }
    return (
        <div>
            <button 
                className="button-add"
                onClick={handleClick}    
            >+</button>
        </div>
    )
}
