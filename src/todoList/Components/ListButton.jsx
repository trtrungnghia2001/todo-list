import React, { useEffect, useState } from 'react'
import {useAppContext} from '../contextTodoList'

const list = [
  {
    name: 'All',
    type: 'all',
    active: true,
  },
  {
    name: 'Done',
    type: true,
    active: false,
  },
  {
    name: 'Todo',
    type: false,
    active: false,
  },
]

export default function ListButton() {
  const {setView, todos} = useAppContext()
  const [btns, setBtns] = useState(list)

  const filterValues = (value)=>{

    setBtns(()=>btns.filter(item=>{
      item.type===value ? item.active=true : item.active=false;
      return item
    }))

    setView(()=>todos.filter(item=>{
      return value === 'all'? todos : item.status === value
    }))
  }

  useEffect(()=>{
    setBtns(()=>btns.filter(item=>{
      item.type==='all' ? item.active=true : item.active=false;
      return item
    }))
  },[todos])

  return (
    <div className="btns">
      {
        btns.map((item, index)=>{
          return(
            <button key={index} className={item.active? 'btn-active': null}
            onClick={()=>filterValues(item.type)}
            >{item.name}</button>
          )
        })
      }
    </div>
  )
}
