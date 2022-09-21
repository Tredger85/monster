import './card-list.styles.css'
import '../card-container/card-container.style.css'
import CardContainer from "../card-container/card-container.component";

const CardList =({monsters})=>(
  <div className='card-list'>
    {monsters.map(monsters =>(
      <CardContainer monsters = {monsters}/>
    ))}
  </div>
);

export default CardList;
