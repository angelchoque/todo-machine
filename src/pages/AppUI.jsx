import React from 'react'

import { TodoContext } from '../context/TodoContext'

import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoCounter } from "../components/TodoCounter"
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { TodoSearch } from '../components/TodoSearch'

import { Modal } from '../modal/Modal'
import { TodoForm } from '../modal/TodoForm'

export const AppUI = () => {

    const {
        error, 
        loading, 
        serchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)

    return (
        <div>
        <div className="container">
            <TodoCounter />
            <TodoSearch />
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

            {!!openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}

            <CreateTodoButton 
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </div>
    </div>
    )
}
