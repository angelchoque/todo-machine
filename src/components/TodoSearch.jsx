import React from 'react'

import '../style/components/TodoSearch.css'

export const TodoSearch = ({ searchValue , setSearchValue, loading }) => {

    const onSearchValueChange = (event) =>{
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
                disabled={loading}
            />
            <span className="icon-search">&#9906;</span>
        </div>
        </React.Fragment>
    )
}
