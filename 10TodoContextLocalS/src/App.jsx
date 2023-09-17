import {useState} from 'react'
import './App.css'
import { TodoContext, TodoProvider } from './context/TodoContext'

function App() {
  const [todos, setTodos] = useState(0)

  const addTodo = (todo) =>{
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }
  const updateTodo = (Id, todo) => {
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id)=== Id? todo:prevTodo) )
  }
  const deleteTodo=(Id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !==Id))
  }

  const toggleComplete = (Id) => {
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id===Id?{...prevTodo, completed:!prevTodo.completed}:prevTodo))
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4"TodoItem>
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add  here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
