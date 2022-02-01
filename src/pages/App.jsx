import React from 'react'

import { useTodos } from './useTodos'

import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoCounter } from "../components/TodoCounter"
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { TodoSearch } from '../components/TodoSearch'
import { TodoError } from '../components/TodoError'
import { TodoLoading } from '../components/TodoLoading'
import { TodoEmpty } from '../components/TodoEmpty'
import { TodoEmptySearchResults } from '../components/TodoEmptySearchResults'

// import { ChangeAlert } from '../changeAlerts/index'
import { ChangeAlertWithStorageListener } from '../changeAlerts/index'

import { Modal } from '../modal/Modal'
import { TodoForm } from '../modal/TodoForm'

import '../style/pages/App.css'
import { TodoHeader } from '../components/TodoHeader'
// import '../style/Loading.css'


export const App = () => {

    const {
        error,
        loading, 
        serchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        sincronizeTodos,
    } = useTodos()

    return(
        <div>
            <div className="container">

            <TodoHeader loading={loading}>
                <TodoCounter 
                    totalTodos={totalTodos} 
                    completedTodos={completedTodos}
                    // loading={loading}
                />

                <TodoSearch 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue}
                    // loading={loading}
                />
            </TodoHeader>

                <TodoList 
                  error={error}
                  loading={loading}
                  searchedTodos={serchedTodos}
                  totalTodos={totalTodos}
                //   searchTextValue={searchValue}
                  onError={ () => <TodoError />}
                  onLoading={ () => <TodoLoading />}
                  onEmptyTodos={ () => <TodoEmpty />}
                  onEmptySearchResults={ () => <TodoEmptySearchResults searchTextValue={searchValue} />}
                //   render={ item => (
                //     <TodoItem 
                //         key={item.text}
                //         text={item.text}
                //         completed={item.completed}
                //         onComplete={() => completeTodo(item.text)}
                //         onDelete={() => deleteTodo(item.text)}
                //     />
                //   ) }  
                >
                {item => (
                    <TodoItem 
                        key={item.text}
                        text={item.text}
                        completed={item.completed}
                        onComplete={() => completeTodo(item.text)}
                        onDelete={() => deleteTodo(item.text)}
                    />
                  )
                }
                </TodoList>

                {/* <TodoList>
                    {error && <TodoError />}
                    {loading && <TodoLoading />}
                    {(!loading && !serchedTodos.length) && <TodoEmpty />}
                    {serchedTodos.map(item => (
                        <TodoItem 
                            key={item.text}
                            text={item.text}
                            completed={item.completed}
                            onComplete={() => completeTodo(item.text)}
                            onDelete={() => deleteTodo(item.text)}
                        />))}
                </TodoList> */}

                {!!openModal && (
                    <Modal>
                        <TodoForm 
                            addTodo={addTodo}
                            setOpenModal={setOpenModal}
                        />
                    </Modal>
                )}

                <CreateTodoButton 
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />

                {/* <ChangeAlert /> */}
                <ChangeAlertWithStorageListener
                    sincronize={sincronizeTodos}
                />
            </div>
        </div>
    )
}
