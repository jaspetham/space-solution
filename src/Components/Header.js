import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const isVisible = () =>{
        if(visible){
            setVisible(false);
        }else{
            setVisible(true);
        }
    };
    return (
        <header className="primary-header flex">
            <div>
                <img className='logo' src="../assets/shared/logo.svg" alt="" />
            </div>
            <button onClick={isVisible} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={visible ? "true" : "false"}><span className="sr-only" aria-expanded={visible ? "true" : "false"}>Menu</span></button>
            <nav>
                <ul data-visible={visible ? "true" : "false"} className="primary-navigation underline-indicators flex">
                    <li className="active"><Link to='/' className="ff-serifs-cond uppercase text-white letter-spacing-2" href="#"><span aria-hidden="true">00</span>Home</Link></li>
                    <li><Link to='/destination' className="ff-serifs-cond uppercase text-white letter-spacing-2" href="#"><span aria-hidden="true">01</span>Destination</Link></li>
                    <li><Link to='/crew' className="ff-serifs-cond uppercase text-white letter-spacing-2" href="#"><span aria-hidden="true">02</span>Crew</Link></li>
                    <li><Link to='/' className="ff-serifs-cond uppercase text-white letter-spacing-2" href="#"><span aria-hidden="true">03</span>Technology</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
