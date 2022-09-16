import {Component} from "react";

import './card-container.style.css'

class CardContainer extends Component {
  render() {
    const { monsters } = this.props

    return(
      <div className='card-container' key={monsters.id}>
        <img alt='monster' src = {`https://robohash.org/${monsters.id+10}?set=set2&size=180x180`}/>
        <h2>{monsters.name}</h2>
        <p>{monsters.email}</p>
      </div>
    )
  }
}

export default CardContainer
