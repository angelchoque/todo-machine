import React from 'react'

import '../style/components/TodoItem.css'

export const TodoItem = (props) => {
    return (
        <li className="list-item">
            <button 
                className={`button-item button-check ${props.completed && 'button-check--active'}`} 
                type="button"
                onClick={props.onComplete}    
            >
                &#10004;
            </button>

            <div className={`list-item-text ${props.completed && 'list-item-text--complete'}`}>{props.text}</div>
            <button 
                type="button" 
                className="button-item button-x"
                onClick={props.onDelete}    
            >
            &#10008;
            </button>
        </li>
    )
}
