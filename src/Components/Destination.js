import './Destination.css'
import Header from './Header'
import moonImage from '../assets/destination/image-moon.png';
import moonImageP from '../assets/destination/image-moon.webp';
import marsImage from '../assets/destination/image-mars.png';
import marsImageP from '../assets/destination/image-mars.webp';
import europaImage from '../assets/destination/image-europa.png';
import europaImageP from '../assets/destination/image-europa.webp';
import titanImage from '../assets/destination/image-titan.png';
import titanImageP from '../assets/destination/image-titan.webp';

const Destination = () => {
    return (
        <main id="main" className='destination'>
            <Header/>
            <div className='grid-container grid-container--destination flow'>
                <h1 className='numbered-title'><span aria-hidden="true">01</span> Pick your destination</h1> 
                <picture id="moon-image">
                    <source srcSet={moonImageP + ' x1'} type="image/webp"/>
                    <img src={moonImage} alt="moon" />
                </picture>
                <picture hidden id="mars-image">
                    <source srcSet={marsImageP + ' x1'} type="image/webp"/>
                    <img src={marsImage} alt="mars" />
                </picture>
                <picture hidden id="europa-image">
                    <source srcSet={europaImageP + ' x1'} type="image/webp"/>
                    <img src={europaImage} alt="europa" />
                </picture>
                <picture hidden id="titan-image">
                    <source srcSet={titanImageP + ' x1'} type="image/webp"/>
                    <img src={titanImage} alt="titan" />
                </picture>
                 <div className="tab-list underline-indicators flex" role="tablist" aria-label="destination list">
                    <button aria-selected="true" role="tab" aria-controls="moon-tab"  tabIndex='0' data-image='moon-image' className="uppercase ff-sans-cond text-light letter-spacing-2">Moon</button>
                    <button aria-selected="false" role="tab" aria-controls="mars-tab" tabIndex='-1' data-image='mars-image' className="uppercase ff-sans-cond text-light letter-spacing-2">Mars</button>
                    <button aria-selected="false" role="tab" aria-controls="europa-tab" tabIndex='-1' data-image='europa-image' className="uppercase ff-sans-cond text-light letter-spacing-2">Europa</button>
                    <button aria-selected="false" role="tab" aria-controls="titan-tab" tabIndex='-1' data-image='titan-image' className="uppercase ff-sans-cond text-light letter-spacing-2">Titan</button>
                </div>
                {/* moon */}
                <article className="destination-info flow" id="moon-tab" tabIndex="0" role="tabpanel">
                    <h2 className='fs-800 uppercase ff-serif'>Moon</h2>
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                    regain perspective and come back refreshed. While you’re there, take in some history 
                    by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <div className="destination-meta flex">
                        <div>
                            <h3 className='text-light fs-200 uppercase'>Avg. distance</h3>
                            <p className="ff-serif uppercase">384,400 km</p>
                        </div>
                        <div>
                            <h3 className='text-light fs-200 uppercase'>Est. travel time</h3>
                            <p className="ff-serif uppercase">3 days</p>
                        </div>
                    </div>                    
                </article>
                {/* mars */}
                <article hidden className="destination-info flow" id="mars-tab" tabIndex="0" role="tabpanel">
                    <h2 className='fs-800 uppercase ff-serif'>Mars</h2>
                    <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                    the tallest planetary mountain in our solar system. It’s two and a half times 
                    the size of Everest!</p>
                    <div className="destination-meta flex">
                        <div>
                            <h3 className='text-light fs-200 uppercase'>Avg. distance</h3>
                            <p className="ff-serif uppercase">225 mil. km</p>
                        </div>
                        <div>
                            <h3 className='text-light fs-200 uppercase'>Est. travel time</h3>
                            <p className="ff-serif uppercase">9 months</p>
                        </div>
                    </div>                    
                </article>
                {/* europa */}
                <article hidden className="destination-info flow" id="europa-tab" tabIndex="0" role="tabpanel">
                    <h2 className='fs-800 uppercase ff-serif'>Europa</h2>
                    <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                    ice skating, curling, hockey, or simple relaxation in your snug 
                    wintery cabin.</p>
                    <div className="destination-meta flex">
                        <div>
                            <h3 className='text-light fs-200 uppercase'>Avg. distance</h3>
                            <p className="ff-serif uppercase">628 mil. km</p>
                        </div>
                        <div>
                            <h3 className='text-light fs-200 uppercase'>Est. travel time</h3>
                            <p className="ff-serif uppercase">3 years</p>
                        </div>
                    </div>                    
                </article>
                {/* titan */}
                <article hidden className="destination-info flow" id="titan-tab" tabIndex="0" role="tabpanel">
                    <h2 className='fs-800 uppercase ff-serif'>Titan</h2>
                    <p>The only moon known to have a dense atmosphere other than Earth, Titan 
                    is a home away from home (just a few hundred degrees colder!). As a 
                    bonus, you get striking views of the Rings of Saturn.</p>
                    <div className="destination-meta flex">
                        <div>
                            <h3 className='text-light fs-200 uppercase'>Avg. distance</h3>
                            <p className="ff-serif uppercase">1.6 bil. km</p>
                        </div>
                        <div>
                            <h3 className='text-light fs-200 uppercase'>Est. travel time</h3>
                            <p className="ff-serif uppercase">7 years</p>
                        </div>
                    </div>                    
                </article>
            </div>
        </main>
    )
}

export default Destination
