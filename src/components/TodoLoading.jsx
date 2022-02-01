import React from 'react'

import '../style/Loading.css'

export const TodoLoading = () => {
    return (
        <div>
            <div className='loading-container'>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
