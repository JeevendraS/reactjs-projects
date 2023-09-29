import React from "react";
import {  useDispatch, useSelector} from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
        <div className="my-3 text-2xl bg-gray-200 rounded">Todos</div>
        {
            todos.map((todo)=>(
                <li className="bg-gray-500 my-2 rounded  w-1/2 mx-auto p-1 text-xl text-white list-none" key={todo.id}>{todo.text} <button onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button></li>
            ))
        }
        </>
    )
}
export default Todos