import './Header.css';

const Header = () => {
    return (
        <header className="flex">
            <div>
                <img src="../assets/shared/logo.svg" alt="" />
            </div>
            <nav>
                <ul className="primary-navigation underline-indicators flex">
                    <li className="active"><a className="ff-serifs-cond uppercase text-white letter-spacing-2" href="#"><span>00</span>Home</a></li>
                    <li><a className="ff-serifs-cond uppercase text-white letter-spacing-2" href="#"><span>01</span>Destination</a></li>
                    <li><a className="ff-serifs-cond uppercase text-white letter-spacing-2" href="#"><span>02</span>Crew</a></li>
                    <li><a className="ff-serifs-cond uppercase text-white letter-spacing-2" href="#"><span>03</span>Technology</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
