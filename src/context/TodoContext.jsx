import React from 'react'

import { useLocalStorage } from './useLocalStorage'
// es un objeto con propiedades, 2 conponentes * {Provider, Consumer}
// const name = react.createContext()
const TodoContext = React.createContext()


// componente atajo para llegar 
function TodoProvider(props) {

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error,
    } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = React.useState('')

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length

    let serchedTodos = []
    
    if (!searchValue.length >= 1){
        serchedTodos = todos
    } else {
        serchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText)
        })
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)

        const newTodos = [...todos]
        newTodos[todoIndex].completed = true

        saveTodos(newTodos)
        // todos[todoIndex] = {
        //     text: todos[todoIndex].text,
        //     completed: true,
        // }
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)

        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)

        saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider 
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                serchedTodos,
                completeTodo,
                deleteTodo,
            }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}