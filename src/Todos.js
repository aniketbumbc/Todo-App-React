import React from 'react';
const Todos = ({todos,deleteTodo}) =>{
    console.log(todos);
//const todosData = todos;
const todoList = todos.length ? (
    todos.map(todo=>{
        console.log("test",todo);
        return(
            <div className="collection-item" key={todo.id}>
            <span onClick={()=> {deleteTodo(todo.id) }}>{todo.content}</span>
            </div>
        )
    })
):(<p className="center"> Today todo's list completed Yepeee!!!! </p>)
return(
    <div className ="todos collection">
        {todoList}
    </div>   
)
}
export default Todos;
