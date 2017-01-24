import React from 'react'

class TodoFilters extends React.Component {

  constructor(props) {
    super(props)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleCheckboxChange(e) {
    this.props.onFilterChange({
      [e.target.name]: e.target.checked
    })
  }

  render () {
    return (
      <div>
        <input type="checkbox" id="new" name="showNew"
          checked={this.props.filters.showNew}
          onChange={this.handleCheckboxChange} />
        <label htmlFor="new">Nouveau</label>
        <input type="checkbox" id="in_progress" name="showInProgress"
          checked={this.props.filters.showInProgress}
          onChange={this.handleCheckboxChange} />
        <label htmlFor="in_progress">En cours</label>
        <input type="checkbox" id="done" name="showDone"
          checked={this.props.filters.showDone}
          onChange={this.handleCheckboxChange} />
        <label htmlFor="done">Terminé</label>
      </div>
    )
  }
}

export default TodoFilters;
