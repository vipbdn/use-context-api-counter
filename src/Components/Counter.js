import React from 'react'
import { useSelector , useDispatch} from 'react-redux'


function Counter() {
    const value = useSelector((x)=>  x)
    const dispatch = useDispatch()
    return (
        <div>
          <h1>Welcome to Redux {value}</h1>
          <button onClick={()=>dispatch({type:'add'})}>Inc</button>
          <button onClick={()=>dispatch({type:'dec'})}>Dec</button>
          <button onClick={()=>dispatch({type:'res'})}>Res</button>
          <button onClick={()=>dispatch({type:'addValue', payload:10})}>Add 10</button>
          
        </div>
      )
}

export default Counter
