import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const ToDoCount = ({number}) => {
  return ( 
  <p>
    {number} {number <= 1 ? 'todo' : 'todos'}
  </p>
  );
};

ToDoCount.propTypes = {
  number: PropTypes.number.isRequired,
}

const ClearButton = ({removeCompleted}) => {
  return (
    <button onClick={() => removeCompleted()}>Clear Completed</button>
  );
};

ClearButton.propTypes = {
  removeCompleted: PropTypes.func.isRequired
};

const TodoItem = ({item, toggleComplete, removeToDo}) => {
  return (
    <li>
      {item.title}
      <input 
        type="checkbox" 
        id={item.id} 
        checked={item.complete} 
        onChange={() => toggleComplete(item)} />
      <label htmlFor={item.id} />
      <button onClick={() => removeToDo(item)}>
        <i className="fa fa-trash" />
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired
  }).isRequired
};



// class TodoItem extends Component {
//   render (){
//     return(
//     <div>
//       <li>
//         {this.props.todo}
//       </li>
//     </div>
//     )
//   }
// }

class App extends Component {
  constructor() {
    super();
      this.state = {
        showIt: true,
        todos: [
          { id: 0, title: 'Learn React', complete: false },
          { id: 1, title: 'Learn Redux', complete: false },
          { id: 2, title: 'Learn Meteor', complete: false },
          { id: 3, title: 'Learn React Native', complete: false }
        ],
        lastId: 0,
      };
    }

    toggleComplete = (item) => {
      const todos = this.state.todos.map((todo) => {
        if(todo.id === item.id) item.complete = !item.complete;
        return todo;
      });
      this.setState({todos});
    };

    removeToDo = item => {
      const todos = this.state.todos.filter((todo) => todo.id !== item.id);
      this.setState({todos});
    }

    removeCompleted = () => {
      const todos = this.state.todos.filter((todo) => !todo.complete);
      this.setState({todos});
    }

    hasCompleted = () => {
      const todos = this.state.todos.filter(todo => todo.complete);
      return todos.length > 0 ? true : false;
    }

  render(){      
    return (
      <div className="todo-list">
        <h1>So much to dooooo!</h1>
        <div className="add-todo">
          <form name="addTodo" onSubmit={this.addToDo}>
          <input type="text" ref={this.toDoInput} />
          <span>(press enter to add)</span>
        </form>
      </div>
        {
          this.state.showIt ? (<ul>
            {this.state.todos.map((todo, index) => (
              <TodoItem 
                item={todo} 
                key={todo.id} 
                toggleComplete={this.toggleComplete}
                removeToDo={this.removeToDo} />
            ))}
            </ul>
        ) : (
          <p>List doesn't exist.</p>
        )}
        <div className="todo-admin">
          <ToDoCount number={this.state.todos.length} />
          <ClearButton removeCompleted=""/>
        </div>
        {/* {
          this.setState({greetings: 'Hola'})
        } */}
      </div>
    )
  }
}

export default App;
