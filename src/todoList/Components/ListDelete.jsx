import React from 'react'
import { useAppContext } from '../contextTodoList'

export default function ListDelete() {
  const {setTodos, todos} = useAppContext()
  const deleteDone=()=>{
    const newTodos = todos.filter(item=>item.status!==true)
    setTodos(newTodos)
  }
  const deleteAll=()=>{
    setTodos([])
  }
  return (
    <div className="btns-delete">
      <button onClick={deleteDone}>Delete done tasks</button>
      <button onClick={deleteAll}>Delete all tasks</button>
    </div>
  )
}
