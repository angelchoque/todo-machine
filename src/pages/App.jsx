import React from 'react'

import { TodoProvider } from '../context/TodoContext'

import { AppUI } from './AppUI'

import '../style/pages/App.css'

export const App = () => {
    return(
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    )
}
