import React from 'react'
import { useAppContext } from '../contextTodoList'
import {nanoid} from 'nanoid'
import {RiTodoFill} from 'react-icons/ri'

export default function Input() {
  const {value, setValue, setTodos, isEdit, setIsEdit, todos, idEdit} = useAppContext()

  const handbleInput =(e)=>{
    if(isEdit && e.key==='Enter' && value){
      const newTodos = todos.map(item=>{
        if(item.id===idEdit) item.text = value;
        return item
      })
      setTodos(newTodos)
      setIsEdit(false)
      setValue('')
      return
    }
    if(e.key==='Enter' && value){
      const newTodo = {
        id: nanoid(),
        text: value,
        status: false,
      }
      setTodos(prev =>[...prev,newTodo])
      setValue('')
    }
  }

  const handbleClickAdd =(e)=>{
    if(isEdit && value){
      const newTodos = todos.map(item=>{
        if(item.id===idEdit) item.text = value;
        return item
      })
      setTodos(newTodos)
      setIsEdit(false)
      setValue('')
      return
    }
    if(value){
      const newTodo = {
        id: nanoid(),
        text: value,
        status: false,
      }
      setTodos(prev =>[...prev,newTodo])
      setValue('')
    }
  }

  return (
    <div className="input">
        <div className="input__input">
            <div className="input__icon">
              <RiTodoFill/>
            </div>
            <input type="text" placeholder='New Todo'
            value={value}
            onChange={e=>setValue(e.target.value)}
            onKeyDown={handbleInput}
            />
        </div>
        <div className="input__btn-add" onClick={handbleClickAdd}>
            <button>Add new task</button>
        </div>
    </div>
  )
}
