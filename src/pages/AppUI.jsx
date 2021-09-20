import React from 'react'

import { TodoContext } from '../context/TodoContext'

import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoCounter } from "../components/TodoCounter"
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { TodoSearch } from '../components/TodoSearch'

export const AppUI = () => {

    const value = React.useContext(TodoContext)

    return (
        <div>
        <div className="container">
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({
                    error, 
                    loading, 
                    serchedTodos, 
                    completeTodo, 
                    deleteTodo,
                    }) => (
                    <TodoList>
                        {error && <p>Error 404, failed</p>}
                        {loading && <p>Estamos Cargando</p>}
                        {(!loading && !serchedTodos.length) && <p>Crea Tu primer TODO😉</p>}
                        {serchedTodos.map(item => (
                            <TodoItem 
                                key={item.text}
                                text={item.text} 
                                completed={item.completed}
                                onComplete={() => completeTodo(item.text)}
                                onDelete={() => deleteTodo(item.text)}
                            />))}
                    </TodoList>
                )}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </div>
    </div>
    )
}
