import React from 'react'

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {

        const [storageChange, setStorageChange] = React.useState(false)

        React.useEffect(() => {
            window.addEventListener("storage", (event) => {
                if (event.key === "TODOS_V1") {
                    setStorageChange(true)
                    console.log("Hubo cambios en todos v1")
                }
            })
        }, [])
        // window.addEventListener("storage", (event) => {
        //     if (event.key === "TODOS_V1") {
        //         setStorageChange(true)
        //         console.log("Hubo cambios en todos v1")
        //     }
        // })

        const toogleShow = () => {
            props.sincronize()
            setStorageChange(false)
        }

        return (
            <WrappedComponent 
                show={storageChange}
                // toggleShow={setStorageChange}
                toggleShow={toogleShow}
            />
        )
    }
}

export { withStorageListener }