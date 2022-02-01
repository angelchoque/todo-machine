import React from 'react'

export const TodoHeader = (props) => {
    
    return (
        <div>
            {/* {props.children} */}
            {/* { React.cloneElement(props.children, { loading: props.loading }) } */}
            {
                React.Children
                    .toArray(props.children)
                    .map(child => React.cloneElement(child, {loading: props.loading}))}
        </div>
    )
}
