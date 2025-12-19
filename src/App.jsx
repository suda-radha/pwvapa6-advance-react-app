import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import { ThemeProvider } from './context/Theme.jsx'
import ToggleTheme from './components/ToggleTheme.jsx'
import Counter from './components/Counter.jsx'
import SpyFunc from './components/SpyFunc.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SpyFunc/>

    {/*  <Counter/>
     <ThemeProvider>
      <ToggleTheme/>
    <h1>Todo App</h1>
    <AddTodo />
    <TodoList />
    </ThemeProvider> */}
      
    </div>
  )
}

export default App
