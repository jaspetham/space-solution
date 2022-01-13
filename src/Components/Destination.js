import './Destination.css'
import Header from './Header'
import moonImage from '../assets/destination/image-moon.png';

const Destination = () => {
    return (
        <main id="main" className='destination'>
            <Header/>
            <div className='grid-container grid-container--destination flow'>
                <h1 className='numbered-title'><span aria-hidden="true">01</span> Pick your destination</h1> 
                <img src={moonImage} alt="moon" />
                 <div class="tab-list underline-indicators flex">
                    <button aria-selected="true" class="uppercase ff-sans-cond text-light bg-dark letter-spacing-2">Moon</button>
                    <button aria-selected="false" class="uppercase ff-sans-cond text-light bg-dark letter-spacing-2">Mars</button>
                    <button aria-selected="false" class="uppercase ff-sans-cond text-light bg-dark letter-spacing-2">Europa</button>
                    <button aria-selected="false" class="uppercase ff-sans-cond text-light bg-dark letter-spacing-2">Titan</button>
                </div>
                <article class="destination-info">
                    <h2 className='fs-800 uppercase ff-serif'>Moon</h2>
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                    regain perspective and come back refreshed. While you’re there, take in some history 
                    by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <div className="destination-meta flex">
                        <div>
                            <h3 className='text-light fs-200 uppercase'>Avg. distance</h3>
                            <p class="ff-serif uppercase">384,400 km</p>
                        </div>
                        <div>
                            <h3 className='text-light fs-200 uppercase'>Est. travel time</h3>
                            <p class="ff-serif uppercase">3 days</p>
                        </div>
                    </div>                    
                </article>
            </div>
        </main>
    )
}

export default Destination
