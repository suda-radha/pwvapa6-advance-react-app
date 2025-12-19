import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice.js'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [input, setInput] = React.useState('')
  
  const handleSubmit = (e) => {   
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit"> Add</button>
    </form>
  )
}

export default AddTodo
