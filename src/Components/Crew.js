import './Crew.css';
import Header from './Header';
import doughlasHurley from '../assets/crew/image-douglas-hurley.png';
import doughlasHurleyP from '../assets/crew/image-douglas-hurley.webp';
import anousHeh from '../assets/crew/image-anousheh-ansari.png';
import anousHehP from '../assets/crew/image-anousheh-ansari.webp';
import markShuttleworth from '../assets/crew/image-mark-shuttleworth.png';
import markShuttleworthP from '../assets/crew/image-mark-shuttleworth.webp';
import victorGlover from '../assets/crew/image-victor-glover.png';
import victorGloverP from '../assets/crew/image-victor-glover.webp';

const Crew = () => {
    return (
        <main id="main" className='crew'>
            <Header/>
            <div className='grid-container grid-container--crew flow'>
                <h1 className='numbered-title'><span aria-hidden="true">02</span> Meet Your Crew</h1> 
                <div className="dot-indicators flex" role='tablist' aria-aria-labelledby='crew list'>
                    <button aria-selected="true" role="tab" tabIndex='0' data-image='commander-image'><span class="sr-only">The commander</span></button>
                    <button aria-selected="false" role="tab" tabIndex='-1' data-image='mission-image'><span class="sr-only">The mission specialist</span></button>
                    <button aria-selected="false" role="tab" tabIndex='-1' data-image='pilot-image'><span class="sr-only">The pilot</span></button>
                    <button aria-selected="false" role="tab" tabIndex='-1' data-image='engineer-image'><span class="sr-only">The crew engineer</span></button>
                </div>
                <article class="crew-details flow">
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase ff-serif'>Commander</h2>
                        <p class="fs-700 uppercase ff-serif">Douglas Hurley</p>
                    </header>
                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                    and former NASA astronaut. He launched into space for the third time as 
                    commander of Crew Dragon Demo-2.</p>       
                </article>
                <picture id="commander-image">
                    <source srcSet={doughlasHurleyP + ' x1'} type="image/webp"/>
                    <img src={doughlasHurley} alt="doughlasHurley" />
                </picture>
                <picture id="mission-image" hidden>
                    <source srcSet={markShuttleworthP + ' x1'} type="image/webp"/>
                    <img src={markShuttleworth} alt="markShuttleworth" />
                </picture>
                <picture id="pilot-image" hidden>
                    <source srcSet={victorGloverP + ' x1'} type="image/webp"/>
                    <img src={victorGlover} alt="victorGlower" />
                </picture>
                <picture id="engineer-image" hidden>
                    <source srcSet={anousHehP + ' x1'} type="image/webp"/>
                    <img src={anousHeh} alt="anousHeh" />
                </picture>
            </div>
        </main>
    )
}

export default Crew
