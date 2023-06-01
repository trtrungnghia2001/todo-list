import React from 'react'
import './todoList.css'

import {AppProvider} from "./contextTodoList";

import Input from './Components/Input';
import ListButton from './Components/ListButton';
import Todos from './Components/Todos';

export default function TodoList() {
  return (
    <div className="todo-list">
      <AppProvider>
        <Input/>
        <ListButton/>
        <Todos/>
      </AppProvider>
    </div>
  )
}
