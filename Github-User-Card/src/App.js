import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard';
import Followers from './Components/Followers';
import Search from './Components/Search';

class App extends React.Component {
  state = {
    card: [],
    userData: [],
    search: [],
    searchData: []
    }

  componentDidMount() {
    console.log('cDM is running')
    axios.get("https://api.github.com/users/stevedole808").then(response => {
      console.log(response);
      this.setState({ card: response.data });
        axios.get("https://api.github.com/users/stevedole808/following")
      .then(response => {
        console.log(response)
        this.setState({userData: response.data, searchData: response.data})
      })
      .catch(error => {
          console.log("No followers returned", error)
        })
    })
  }

  searchUser = (filter) => {
    this.setState({ search: filter })
    fetch(`https://api.github.com/stevedole808/following/${filter}`)
      .then(res => res.json())
      .then(search => {
        console.log(search)
        this.setState({ 
          searchData: this.state.userData.filter( user => {
            return user.login.toLowerCase().includes(this.state.search.toLowerCase()) 
          })
        })
      })
      .catch(err => console.log(err))
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Github Cards</h1>
            <Search searchUser={this.searchUser}/>
            <UserCard card={this.state.card}/>
            <Followers userData={this.state.searchData}/>
        </header>
      </div>
    );
  }
}
export default App;
