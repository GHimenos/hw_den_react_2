import "../css/body.css";
import PhotoWrap from "./PhotoWrap";
import ScrollWrap from './ScrollWrap';
const Body = ()=>{
    return(
    <div className="body">
        <PhotoWrap />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by <br/> one-of-a-kind hosts—all without leaving <br/> home.
        </p>
        <ScrollWrap />  

    </div>
    );
}

export default Body;