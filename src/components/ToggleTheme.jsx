import React from 'react'
import { useTheme } from '../context/Theme.jsx'

const ToggleTheme = () => {
    const {theme, toggleTheme} = useTheme()
  return (
    <div style={{background: theme==='light'?'white':'black', color: theme==='light'?'black':'white', padding: '20px'}}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ToggleTheme
