import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.boxName}`}
        type='search'
        placeholder={this.props.placeHolder}
        onChange={this.props.onSearchChange}
      />
    )
  }
}

export default SearchBox
