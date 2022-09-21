import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import  CardList  from './component/card-list/card-list.component';
import SearchBox from "./component/search-box/search-box.component";


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[])

  useEffect(()=>{
    setFilterMonsters(monsters.filter((monster)=> {
      return monster.name.toLowerCase().includes(searchField);
    }))
  }, [monsters, searchField])

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
      <CardList monsters = { filterMonsters }/>
    }</div>
  );
}

export default App;
