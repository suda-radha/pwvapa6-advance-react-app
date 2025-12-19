import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../features/todoSlice.js'

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch()
  return (
    <li style={{textDecoration:completed ? 'line-through' : 'none'}}>
        {text}
        <button onClick={() => {dispatch(toggleTodo(id))}}>
            {completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => {dispatch(deleteTodo(id))}}>Delete</button>
    </li>
  )
}

export default TodoItem
