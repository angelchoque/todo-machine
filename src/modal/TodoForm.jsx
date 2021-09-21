import React from 'react'

import { TodoContext } from '../context/TodoContext'

import '../style/modal/TodoForm.css'

export function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onChangeTodo = (event) =>{
        setNewTodoValue(event.target.value)
    }

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const onCancel = () =>{
        setOpenModal(false)
    }
    const onSubmitTodo = (event) =>{
        // debugger
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    return (
        <form action="" onSubmit={onSubmitTodo}>
            <label htmlFor="todoFormInput">Escribe tu Nueva tarea</label>
            <textarea 
                value={newTodoValue}
                onChange={onChangeTodo}
                id='todoFormInput'
                name='todoFormInput'
                cols="20" 
                rows="10" 
                placeholder='Terminar los cursos de platzi'></textarea>
            <div className='todoform-button-container'>
                <button 
                    type='button'
                    onClick={onCancel}
                    className='button-form button-form--cancel'
                >
                    Cancelar
                </button>
                <button
                    className='button-form button-form--submit'
                    type='submit'
                >Añadir TODO</button>
            </div>
        </form>
    )
}