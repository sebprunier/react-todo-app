import React from 'react'

class TodoForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.inputTitle.focus()
    // console.log(this.inputTitle)
    // console.log(document.getElementById('title'))
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {
      title: this.state.title,
      description: this.state.description,
      status: 'NEW'
    }
    this.props.onNewTodo(todo);
    this.setState({
      title: '',
      description: ''
    }, () => {
      this.inputTitle.focus()
    })
  }

  render () {
    return (
      <form className="col s12" onSubmit={this.handleSubmit}>
        <div className="input-field col s12">
          <input placeholder="Titre" id="title" type="text"
            ref={(input) => this.inputTitle = input}
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange} />
          <label htmlFor="title">Titre</label>
        </div>
        <div className="input-field col s12">
          <input placeholder="Description" id="description" type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange} />
          <label htmlFor="description">Description</label>
        </div>
        <div className="input-field col s12">
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
        </div>
      </form>
    )
  }
}

export default TodoForm;
