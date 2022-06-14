import './NavBar.css';
import phone from './icons/phone.svg';
import clock from './icons/clock(2).svg';

function NavBar(){
    return (
        <div className="NavBar">
            <p className="head-call"><img src={phone} alt=""/> (+234)801234567 Free Tolline (24/7)</p>
            <p className="head-time"><img src={clock} alt=""/> Opened 7 Days a week, 9am - 6pm.</p>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;