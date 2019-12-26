import React from 'react';
const Todos = ({todos,deleteTodo}) =>{
const todoList = todos.length ? (
    todos.map(todo=>{
        return(
            <div className="collection-item blue-text" key={todo.id}>
            <span onClick={()=> {deleteTodo(todo.id) }}>{todo.content}</span>
            </div>
        )
    })
):(<p className="center red-text"> Today's todo's list completed Yepeee!!!! </p>)
return(
    <div className ="todos collection">
        {todoList}
    </div>   
)
}
export default Todos;
