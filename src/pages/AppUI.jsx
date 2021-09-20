import React from 'react'

import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoCounter } from "../components/TodoCounter"
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { TodoSearch } from '../components/TodoSearch'

export const AppUI = ({
    loading,
    error,
    totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue,
    serchedTodos,
    completeTodo,
    deleteTodo
    }) => {
    return (
        <div>
        <div className="container">
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
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
            <CreateTodoButton />
        </div>
    </div>
    )
}
