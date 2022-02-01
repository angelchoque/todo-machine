import React from "react"
import { withStorageListener } from './withStorageListener'

function ChangeAlert({ show, toggleShow }){
    if (show) {
        return (
            <div>
                <p>Your list is outdated.</p>
                <button 
                    type="submit" 
                    onClick={() => toggleShow(false)}
                >Refresh</button>
            </div>)
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }