import React from 'react'

export const TodoEmptySearchResults = ( { searchTextValue }) => {
    return (
        <div>
            No hay resultados para { searchTextValue }
        </div>
    )
}
