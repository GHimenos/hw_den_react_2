import "../css/scrollWrap.css";
import ScrollItem from "./ScrollItem";
import scrollItems from "../data/scrollBlockProps";

function ScrollWrap() {
  return (
    <div className="scrollwrap">
      {scrollItems.map((item)=>{
        return <ScrollItem key ={item.id} {...item}/>
      })}
      
    </div>
  )
}

export default ScrollWrap