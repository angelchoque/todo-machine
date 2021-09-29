import React from 'react'

import { TodoContext } from '../context/TodoContext'

import '../style/modal/TodoForm.css'

export function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('')
    const [blurVer, setBlurVer] = React.useState(false)

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
        event.preventDefault()
        if (!newTodoValue){
            setBlurVer(true)
        } else {
            addTodo(newTodoValue)
            setOpenModal(false)
        }
    }
    const onBlurTodo = () =>{
        !newTodoValue ? setBlurVer(true) : setBlurVer(false)
    }
    
    return (
        <form action="" onSubmit={onSubmitTodo}>
            <label htmlFor="todoFormInput">Escribe tu Nueva tarea</label>
            <textarea 
                value={newTodoValue}
                onChange={onChangeTodo}
                onBlur={onBlurTodo}
                onFocus={()=>{
                    setBlurVer(false)
                }}
                id='todoFormInput'
                name='todoFormInput'
                placeholder='Terminar los cursos de platzi'
                className={`text-area ${blurVer && "text-area--undefined"}`}
                >
            </textarea>
            {blurVer && <p className="text-alert">No puedes dejar el campo vacio</p>}
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