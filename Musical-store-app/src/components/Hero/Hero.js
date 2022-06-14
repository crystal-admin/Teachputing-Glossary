import './Hero.css';
import HeroImage from './Music04.jpg';

function Hero(){
    return(
        <div className="section1">
             <img src={HeroImage} alt="" />
        </div>
    );
}

export default Hero;