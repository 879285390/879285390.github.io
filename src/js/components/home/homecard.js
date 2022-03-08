import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../../css/home/homecard.css'

export default function HomeCard(props){
    // console.log(11111)
    const {cardUrl, cardName, cardContent} = props
    const List = cardContent.map(item => {
      return (<div className="home-card-item" key={item.id}><Link to={item.url}>{item.title}</Link></div>)
    })
    // console.log(List);
    return (
      <div className="home-card">
        <div className="home-card-title"><Link to={cardUrl}>{cardName}</Link></div>
        <div className="home-card-content">
          {List}
        </div>
      </div>
    )
  }

HomeCard.defaultProps = {
  cardName: 'Card Name',
  cardUrl: 'Card Url',
  cardContent: [],
};

HomeCard.propTypes = {
  cardUrl:PropTypes.string,
  cardName:PropTypes.string,
  cardContent:PropTypes.array
}

