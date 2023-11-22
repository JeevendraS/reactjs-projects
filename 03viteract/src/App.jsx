
import './App.css'
import Card from './App2.jsx'

function App() {
  let someObj = {
    name:"jeevendra singh",
    age:23
  }

  return (
    <>
      <h1 className='bg-green-500 p-2 m-3 text-white rounded-full'>hello world</h1>
      <Card username="Jeevendra" />
      <Card username="singh"/>
      <Card username="raghuvanshi"/>
    </>
  )
}

export default App
