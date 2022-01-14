import './Crew.css';
import Header from './Header';
import doughlasHurley from '../assets/crew/image-douglas-hurley.png';
import doughlasHurleyP from '../assets/crew/image-douglas-hurley.webp';

const Crew = () => {
    return (
        <main id="main" className='crew'>
            <Header/>
            <div className='grid-container grid-container--crew flow'>
                <h1 className='numbered-title'><span aria-hidden="true">02</span> Meet Your Crew</h1> 
                <div className="dot-indicators flex">
                    <button aria-selected="true"><span class="sr-only">The commander</span></button>
                    <button aria-selected="false"><span class="sr-only">The mission specialist</span></button>
                    <button aria-selected="false"><span class="sr-only">The pilot</span></button>
                    <button aria-selected="false"><span class="sr-only">The crew engineer</span></button>
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
                <picture>
                    <source srcSet={doughlasHurleyP + ' x1'} type="image/webp"/>
                    <img src={doughlasHurley} alt="doughlasHurley" />
                </picture>
            </div>
        </main>
    )
}

export default Crew
