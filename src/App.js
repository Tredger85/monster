import { Component } from "react";
import logo from './logo.svg';
import './App.css';
import  CardList  from './component/card-list/card-list.component';
import SearchBox from "./component/search-box/search-box.component";

class App extends Component {
    constructor() {
      super();
      this.state = {
        monsters: [],
        searchField: '',
      }
    }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(()=> {
        return { monsters: users}
      }));
  }

  onSearchChange = (event)=>{
    this.setState(()=>{
      return { searchField: event.target.value.toLowerCase()};
    });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster)=> {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <SearchBox
          boxName = 'MonsterSearch'
          onSearchChange = { this.onSearchChange }
          placeHolder='Search Monsters'>
        </SearchBox>
        <CardList monsters = {filteredMonsters}/>
      }</div>
    );
  }
}

export default App;
