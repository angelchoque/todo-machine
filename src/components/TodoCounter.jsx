import React from 'react'

import '../style/components/TodoCounter.css'

export const TodoCounter = ({totalTodos, completedTodos, loading}) => {
    return(
        <div className={`todo-counter ${!!loading && "todo-counter--loading"}`}>
            <h1 className="todo-title">Tasks 😁</h1>
            {totalTodos > 0 ? <h2 
                className="counter-state">Has completado {completedTodos} de {totalTodos} tareas
                </h2> : <h2>No tienes tareas</h2>}
        </div>        
    )
}
