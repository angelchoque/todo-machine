import React from 'react'

import '../style/components/TodoItem.css'

export const TodoItem = (props) => {
    // const onComplete = () =>{
    //     console.log('completed')
    // }
    // const onDelete = () =>{
    //     console.log('deleted')
    // }
    return (
        <li className="list-item">
            <span><button 
                className={`button-item button-check ${props.completed && 'button-check--active'}`} 
                type="button"
                onClick={props.onComplete}    
            >&#10004;</button></span>
            <p className={`list-item-text ${props.completed && 'list-item-text--complete'}`}>{props.text}</p>
            <span><button 
                type="button" 
                className="button-item button-x"
                onClick={props.onDelete}    
            >&#10008;</button></span>
        </li>
    )
}
