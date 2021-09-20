import React from 'react'

import '../style/components/TodoSearch.css'

export const TodoSearch = ({ searchValue , setSearchValue}) => {

    // const [] = React.useState('')

    const onSearchValueChange = (event) =>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <React.Fragment>
        <div className="search-container">
            <input 
                className="search-input" 
                type="text" 
                placeholder="Buscar Tareas"
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <span className="icon-search">&#9906;</span>
        </div>
        </React.Fragment>
    )
}
