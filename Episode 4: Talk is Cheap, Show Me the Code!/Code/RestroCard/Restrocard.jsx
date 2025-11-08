import './Restrocard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const RestroCard = ( { name, cuisines, avgRating, costForTwo,cloudinaryImageId,link} ) => {
    return (
        <a href={link}> 
        <div className="restro-card">
            <img src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name} />
            <h3>{name}</h3>
            <p className='cuisine'>{cuisines.join(", ")}</p>
            <div className='restro-details'>
            <p className='rating'><FontAwesomeIcon icon={faStar} /> {avgRating}</p>
            <p className='dilivery-time'><FontAwesomeIcon icon={faClock}/> 30 mins</p>
            <p className='cost'>{costForTwo}</p>
            </div>
            
        </div>
        </a>
       
    );
}

export default RestroCard;