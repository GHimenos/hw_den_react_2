import '../css/logo.css';
import logo from  '../img/airbnbLogo.png';

const Logo = ()=>{
    return(
        <div className='LogoContainer'>
            <img src={logo} alt="" />
        </div>
    );
}

export default Logo;