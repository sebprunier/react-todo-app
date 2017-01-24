import React, { PropTypes } from 'react'

import Todo from './Todo'

class TodoList extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object)
  }

  render () {
    if (this.props.todos.length === 0) {
      return (
        <div>Aucune tâche!</div>
      )
    } else {
      return (
        <div>
          {
            this.props.todos.map(todo => <Todo key={todo.id} todo={todo} />)
          }
        </div>
      )
    }
  }
}

export default TodoList;
