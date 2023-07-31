import "../css/photoWrap.css";
import PhotoItem from "./PhotoItem";
import items from "../data/phItemProps";

const PhotoWrap = ()=>{
    return (
        <div className="photoWrap">
            {items.map((item) =>{
                return <PhotoItem key={item.id} {...item}/>
            })

            }
        </div>
    );
}

export default PhotoWrap