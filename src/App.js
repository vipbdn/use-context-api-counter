import React, {useState} from 'react'

import './App.css'

import { AppContext } from './ContextStore'
import  ContextCounter from './Components/ContextCounter'

const App = () => {
  const [count, setCount] = useState(0)
  

  return (
    <div className='App'>
      <AppContext.Provider value={{count, setCount}}>
        <ContextCounter/>
      

      </AppContext.Provider>
     
    </div>
  )
}

export default App
