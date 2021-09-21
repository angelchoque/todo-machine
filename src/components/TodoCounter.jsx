import React from 'react'

import { TodoContext } from '../context/TodoContext'

import '../style/components/TodoCounter.css'

export const TodoCounter = () => {

    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return(
        <div className="todo-counter">
            <h1 className="todo-title">Tasks 😁</h1>
            {totalTodos > 0 ? <h2 
                className="counter-state">Has completado {completedTodos} de {totalTodos} tareas
                </h2> : <h2>No tienes tareas</h2>}
        </div>        
    )
}
