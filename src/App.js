import React from 'react';
import TodoList from "./components/TodoComponents/TodoList"
import todosData from "./components/TodoComponents/TodoData"

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
    })
    return {
      todos: updatedTodos
    }
  })
}

  render(){
  const todoitems = this.state.todos.map(item => <TodoList key={item.id} item={item} handleChange={this.handleChange}/>)
  
    return (
      <div className="todo-list">
        {todoitems}

      </div>
    );
  }
}


export default App;
