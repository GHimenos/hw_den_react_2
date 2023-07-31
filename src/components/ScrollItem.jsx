import "../css/scrollItem.css";
import star from "../img/StarIcon.png";



function ScrollItem({img, mark, rating, country, description, price, isOnline, left}) {
  return (
    <div className="scrollItem">
    <img src={img} alt="" />
    <span> <img className="starIco" src={star} alt="" /> {mark}({rating}) &#8226; ({country}) </span>
    <span>{description}</span>
    <span><strong>From ${price}</strong>/ person</span>
    {isOnline && left > 0 && left > 5 && <div className="proposalStatus"> Online</div>} 
    {isOnline && left < 5 && <div className="proposalStatus"> {left} Only left</div>} 
    {left ===0 && <div className="proposalStatus"> Sold out</div>} 
    </div>
  )
}

export default ScrollItem