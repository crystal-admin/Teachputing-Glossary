import './Stock.css';
import drum from './Assets/asba-drums-6c1I8wYRXXc-unsplash.jpg';
import music from './Assets/musical_instruments_set.jpg';
import trumpet from './Assets/trumpet.jfif';
import violin from './Assets/Violin.jpg';

function Stock(){
    return(
        <section class="section2">
        <div>
            <img src={drum} alt=""/>
            <button>Buy</button>
        </div>
        <div>
            <img src={music} alt=""/>
            <button>Buy</button>
        </div>
        <div>
            <img src={trumpet} alt=""/>
            <button>Buy</button>
        </div>
        <div>
            <img src={violin} alt=""/>
            <button>Buy</button>
        </div>
    </section>
    );
}

export default Stock;