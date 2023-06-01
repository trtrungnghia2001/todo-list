import React from 'react'
import { useAppContext } from '../contextTodoList'
import ListDelete from './ListDelete'
import {AiFillCheckSquare} from 'react-icons/ai'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'

export default function Todos() {

  const {view, setTodos, todos, setIsEdit, setIdEdit, setValue} = useAppContext()

  const handbleCheck=(id)=>{
    const newTodos = todos.filter(item=>{
      if(item.id===id) item.status = !item.status;
      return item
    })
    setTodos(newTodos)
  }

  const handbleEdit = (id)=>{
    setIdEdit(id)
    setIsEdit(true)
    setValue(todos.filter(item=>item.id===id)[0].text)
  }

  const handbleDelete = (id)=>{
    const newTodos = todos.filter(item =>item.id!==id)
    setTodos(newTodos)
  }

  return (
    <>
      <div className="todos">
        {
          view.map((item,index)=>{
            return(
              <div className="todo" key={index}>
                <div className={item.status? "todo__text todo__text-done" : "todo__text "}>
                  {item.text}
                </div>
                <div className="todo__action">
                  <button className='check' onClick={()=>handbleCheck(item.id)}>
                    {item.status? <AiFillCheckSquare/> : <AiOutlineCheckSquare/>}
                  </button>
                  <button className='edit' onClick={()=>handbleEdit(item.id)}>
                    <AiFillEdit/>
                  </button>
                  <button className='delete' onClick={()=>handbleDelete(item.id)}>
                    <AiFillDelete/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
      
      {todos.length>0 && <ListDelete/>}
    </>
  )
}
