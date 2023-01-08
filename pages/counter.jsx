import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <div><h1>count:{count}</h1>

    <div><button onClick={(()=>{setCount(count+1)})}>INC</button>
    <button onClick={(()=>{setCount(count-1)})}>DEC</button></div>
    </div>
  )
}

export default Counter