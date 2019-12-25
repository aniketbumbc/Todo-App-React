import React,{Component} from 'react';
import Todos from './Todos';
import AddForm from './AddForm';


class App extends Component {
  state = {
    todos : [
       {id:1, content:"Buy some milk"},
       {id:2, content:"Look for new design"}
     ]
   }

   deleteTodo = (id) =>{
    let todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
      todos:todos
    })
   }

   addForm = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos:todos
    })
  }

render(){
  return (
    <div className="todo-app container">
      <h1 className="center blue-text"> Todo List </h1>
      <label className="text">Click on content to delete:</label>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddForm addForm={this.addForm}/>
    </div>
  );
}
}

export default App;
