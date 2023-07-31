import '../css/photoItem.css'

const PhotoItem = ({img1, img2, id}) => {
  let isOdd = (id % 2)!==0 ?false:true;
  
  if (!img2) {return(
  <div className='photoItem __single'>
        <img src={img1} alt="" />           
    </div>
  )} else if(isOdd) {return (
    <div className='photoItem '>
        <img src={img1} alt="" />           
        <img src={img2} alt="" />           
    </div>
  )}return(
    <div className='photoItem __upSpaced'>
        <img src={img1} alt="" />           
        <img src={img2} alt="" />           
    </div>
  );
}

export default PhotoItem;