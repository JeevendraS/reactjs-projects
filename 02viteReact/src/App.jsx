import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(5)
  let a = function addvalue(){
    if(count<20){
      count++
    }
    setCount(count)
  }
  let b = function(){
    if(count>0){
      count--
    }
    setCount(count)
  }

  return (
    <>
     <h1 >Jeevendra</h1>
    </>
  )
}

export default App
