import React, { Component } from 'react'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.searchUser(this.state.search)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search Usernames"
            value={this.state.search}
            onChange={this.handleChange}
          />
        <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}