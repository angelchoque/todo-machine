import React from 'react'

export const TodoList = (props) => {
    return (
        <section className='TodoList-container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {/* {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()} */}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults()}
            <ul>
                {/* {props.children} */}
                {/* {props.searchedTodos.map(props.render)} */}

                {/* {props.searchedTodos.map(props.render || props.children)} */}

                {(!props.loading && !props.error) && props.searchedTodos.map(props.render || props.children)}

            </ul>
        </section>
    )
}
