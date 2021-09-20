import React from 'react'

import { AppUI } from './AppUI'

import '../style/pages/App.css'


function useLocalStorage(itemName, initialValue) {
    
    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem
    
    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
    } else {
        parsedItem = JSON.parse(localStorageItem)
    }

    const [item, setItem] = React.useState(parsedItem)

    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(stringifiedItem)
    }
    return [
        item,
        saveItem
    ]
}

// const defaultTodos = [
//     {text: 'aaa', completed: false},
//     {text: 'eee', completed: true},
//     {text: 'iii', completed: false},
// ]

export const App = () => {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

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

    console.log('use effecrS antes')
    React.useEffect(() => {
        console.log('use effecrS')
    }, [totalTodos])
    console.log('use effecrS luego')

    return(
        <AppUI 
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            serchedTodos={serchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    )
}
