import React,{useContext} from 'react'
import { AppContext } from '../ContextStore'

function ContextCounter() {
    const {count, setCount} = useContext(AppContext)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Inc</button>
      <button onClick={()=>setCount(count-1)}>Dec</button>
    </div>
  )
}

export default ContextCounter
