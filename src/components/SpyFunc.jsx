import React from 'react'

const SpyFunc = () => {
const handleClick=()=>{
    if(window.__spy){
        window.__spy()
    }
    
}

  return (
    <button onClick={handleClick}>ClickMe</button>
  )
}

export default SpyFunc
