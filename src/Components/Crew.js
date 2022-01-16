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
import { useEffect } from 'react';

const Crew = () => {
    function ChangeTab(){
        const tabList = document.querySelector('[role="tablist"]');
        const tabs = tabList.querySelectorAll('[role="tab"]');
        tabList.addEventListener('keydown',changeTabFocus);
        tabs.forEach((tab) => {
            tab.addEventListener('click', changeTabPanel)
        });

        
        let tabFocus = 0;
        function changeTabFocus(e){
            const keydownLeft = 37;
            const keydownRight = 39;

            // change tab index of current tab to -1
            if(e.keyCode === keydownLeft || e.keyCode === keydownRight){
                tabs[tabFocus].setAttribute('tabindex',-1);
                if(e.keyCode === keydownRight){
                    tabFocus++;
                    if (tabFocus >= tabs.length) {
                        tabFocus = 0;
                    }
                }else if(e.keyCode === keydownLeft){
                    tabFocus--;
                    if (tabFocus < 0) {
                        tabFocus = tabs.length-1;
                    }
                }

                tabs[tabFocus].setAttribute('tabindex', 0);
                tabs[tabFocus].focus();
            }
        
        }
        function changeTabPanel(e){
            const targetTab = e.target;
            const targetPanel = targetTab.getAttribute('aria-controls');
            const tabContainer = targetTab.parentNode;
            const mainContainer = tabContainer.parentNode;
            const targetImage = targetTab.getAttribute('data-image');

            tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected',false);

            targetTab.setAttribute('aria-selected',true);
            hideContent(mainContainer,'[role="tabpanel"]');
            showContent(mainContainer,[`#${targetPanel}`]);

            hideContent(mainContainer,'picture');
            showContent(mainContainer,[`#${targetImage}`]);

        }
        function hideContent(parent,content){
            parent
                .querySelectorAll(content)
                .forEach((item) => item.setAttribute('hidden',true));

        }
        function showContent(parent,content){
            parent.querySelector(content).removeAttribute('hidden');

        }
    } 

    useEffect(()=>{
        ChangeTab();
    })
    return (
        <main id="main" className='crew'>
            <Header/>
            <div className='grid-container grid-container--crew flow'>
                <h1 className='numbered-title'><span aria-hidden="true">02</span> Meet Your Crew</h1> 
                <div className="dot-indicators flex" role='tablist' aria-labelledby='crew list'>
                    <button aria-selected="true" aria-controls="commander-tab" role="tab" tabIndex='0' data-image='commander-image'><span className="sr-only">The commander</span></button>
                    <button aria-selected="false" aria-controls="mission-tab" role="tab" tabIndex='-1' data-image='mission-image'><span className="sr-only">The mission specialist</span></button>
                    <button aria-selected="false" aria-controls="pilot-tab" role="tab" tabIndex='-1' data-image='pilot-image'><span className="sr-only">The pilot</span></button>
                    <button aria-selected="false" aria-controls="engineer-tab" role="tab" tabIndex='-1' data-image='engineer-image'><span className="sr-only">The crew engineer</span></button>
                </div>
                <article className="crew-details flow" id="commander-tab" tabIndex="0" role="tabpanel">
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase ff-serif'>Commander</h2>
                        <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
                    </header>
                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                    and former NASA astronaut. He launched into space for the third time as 
                    commander of Crew Dragon Demo-2.</p>       
                </article>
                <article className="crew-details flow" id="mission-tab" tabIndex="0" role="tabpanel" hidden>
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase ff-serif'>Mission Specialist</h2>
                        <p className="fs-700 uppercase ff-serif">MARK SHUTTLEWORTH</p>
                    </header>
                    <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>       
                </article>
                <article className="crew-details flow" id="pilot-tab" tabIndex="0" role="tabpanel" hidden>
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase ff-serif'>Pilot</h2>
                        <p className="fs-700 uppercase ff-serif">Victor Glover</p>
                    </header>
                    <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>       
                </article>
                <article className="crew-details flow" id="engineer-tab" tabIndex="0" role="tabpanel" hidden>
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase ff-serif'>Flight Engineer</h2>
                        <p className="fs-700 uppercase ff-serif">Anousheh Ansari</p>
                    </header>
                    <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>       
                </article>
                <picture className='crew-img' id="commander-image">
                    <source srcSet={doughlasHurleyP + ' x1'} type="image/webp"/>
                    <img src={doughlasHurley} alt="doughlasHurley" />
                </picture>
                <picture className='crew-img' id="mission-image" hidden>
                    <source srcSet={markShuttleworthP + ' x1'} type="image/webp"/>
                    <img src={markShuttleworth} alt="markShuttleworth" />
                </picture>
                <picture className='crew-img' id="pilot-image" hidden>
                    <source srcSet={victorGloverP + ' x1'} type="image/webp"/>
                    <img src={victorGlover} alt="victorGlower" />
                </picture>
                <picture className='crew-img' id="engineer-image" hidden>
                    <source srcSet={anousHehP + ' x1'} type="image/webp"/>
                    <img src={anousHeh} alt="anousHeh" />
                </picture>
            </div>
        </main>
    )
}

export default Crew
