import React, { PropTypes } from 'react'

import Statuses from './Statuses'

class Todo extends React.Component {

  static propTypes = {
    todo : PropTypes.shape({
      id : PropTypes.number.isRequired,
      title : PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status : PropTypes.string.isRequired
    })
  }

  render () {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">{this.props.todo.title}</span>
          <p>{this.props.todo.description}</p>
        </div>
        <div className="card-action">
          <button className={this.props.todo.status === "DONE" ? 'btn disabled' : 'btn'}>
            {Statuses[this.props.todo.status]}
          </button>
        </div>
      </div>
    )
  }
}

export default Todo;
