import { Component } from "react";
import './card-list.styles.css'
import '../card-container/card-container.style.css'
import CardContainer from "../card-container/card-container.component";

class CardList extends Component {

  render() {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map(monsters =>(
          <CardContainer monsters = {monsters}/>
        ))}
      </div>
    )
  }
}

export default CardList;
