import './search-box.styles.css';

const SearchBox =(props)=>(
  <input
    className={`search-box ${props.boxName}`}
    type='search'
    placeholder={props.placeHolder}
    onChange={props.onSearchChange}
  />
);

export default SearchBox
