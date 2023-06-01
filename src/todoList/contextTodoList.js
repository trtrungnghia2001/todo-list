import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext()

const AppProvider = ({children})=>{

    const [todos, setTodos] = useState(()=>{
        const newTodos = JSON.parse(localStorage.getItem('todos'))
        return newTodos? newTodos : []
    })

    const [value, setValue] = useState('')
    const [view, setView] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [idEdit, setIdEdit] = useState(false)

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
        setView(todos)
    },[todos])
    
    return(
        <AppContext.Provider value = {{todos, setTodos, value, setValue, view, setView, 
        isEdit, setIsEdit, idEdit, setIdEdit}} >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext)

export {AppContext, AppProvider, useAppContext}