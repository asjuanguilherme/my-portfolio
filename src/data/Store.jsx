import React, { useState } from 'react'

const data = {
    noturneTheme: localStorage.noturneTheme !== undefined? JSON.parse(localStorage.noturneTheme) : false,
    sidebarMini: localStorage.sidebarMini !== undefined? JSON.parse(localStorage.sidebarMini) : false
}

export default data

const AppContext = React.createContext(data)

const Store = props => {

    localStorage.setItem('sidebarMini', localStorage.sidebarMini === undefined? false : localStorage.sidebarMini )
    localStorage.setItem('noturneTheme', localStorage.noturneTheme === undefined? false : localStorage.noturneTheme )

    const [ state, setState ] = useState(data)

    const updateState = (key, value) => {
        setState({
            ...state,
            key: value
        })
    }

    const changeTheme = _ => {
        setState({
            ...state,
            noturneTheme: !state.noturneTheme
        })
    }

    const sidebarWidthController = _ => {
        setState({
            ...state,
            sidebarMini: !state.sidebarMini
        })
    }
    
    return (
        <AppContext.Provider value={{changeTheme, sidebarWidthController}} >
            { props.children }
        </AppContext.Provider>
    )
}

export default AppContext