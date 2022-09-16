import {Component, useState} from "react";
import logo from './logo.svg';
import './App.css';
import  CardList  from './component/card-list/card-list.component';
import SearchBox from "./component/search-box/search-box.component";


const App = () => {
  const [searchField, setSearchField] = useState('');
  const onSearchChange = (event)=>{
    setSearchField( event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <SearchBox
        boxName = 'MonsterSearch'
        onSearchChange = { onSearchChange }
        placeHolder='Search Monsters'>
      </SearchBox>
      {/*<CardList monsters = {filteredMonsters}/>*/}
    }</div>
  );
}

// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         monsters: [],
//         searchField: '',
//       }
//     }
//
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(()=> {
//         return { monsters: users}
//       }));
//   }
//

//
//   render() {
//     const filteredMonsters = this.state.monsters.filter((monster)=> {
//       return monster.name.toLowerCase().includes(this.state.searchField);
//     });

//   }
// }
//
export default App;
