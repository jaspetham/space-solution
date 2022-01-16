import Header from "./Header";
import './Technology.css';
import spaceLaunch from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceLaunchP from '../assets/technology/image-launch-vehicle-portrait.jpg';
import port from '../assets/technology/image-spaceport-portrait.jpg';
import portP from '../assets/technology/image-spaceport-portrait.jpg';
import capsule from '../assets/technology/image-space-capsule-portrait.jpg';
import capsuleP from '../assets/technology/image-space-capsule-portrait.jpg';
import { useEffect } from "react";

const Technology = () => {
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
        <main id="main" className='technology'>
            <Header/>
            <div className='grid-container grid-container--technology flow'>
                <h1 className='numbered-title'><span aria-hidden="true">03</span>Space Launch 101</h1> 
                <div className="number-indicators flex place-content-center" role='tablist' aria-labelledby='space launch list'>
                    <button aria-selected="true" aria-controls="launch-tab" role="tab" tabIndex='0' data-image='launch-image' className='grid place-content-center'><span className="ff-sans fs-600">1</span></button>
                    <button aria-selected="false" aria-controls="port-tab" role="tab" tabIndex='-1' data-image='port-image' className='grid place-content-center'><span className="ff-sans fs-600">2</span></button>
                    <button aria-selected="false" aria-controls="capsule-tab" role="tab" tabIndex='-1' data-image='capsule-image' className='grid place-content-center'><span className="ff-sans fs-600">3</span></button>
                </div>
                <article className="technology-details flow" id="launch-tab" tabIndex="0" role="tabpanel">
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase ff-sans-cond'>THE TERMINOLOGY…</h2>
                        <p className="fs-700 uppercase ff-serif">LAUNCH VEHICLE</p>
                    </header>
                    <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>       
                </article>
                <article hidden className="technology-details flow" id="port-tab" tabIndex="0" role="tabpanel">
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase ff-sans-cond'>THE TERMINOLOGY…</h2>
                        <p className="fs-700 uppercase ff-serif">SPACEPORT</p>
                    </header>
                    <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>       
                </article>
                <article hidden className="technology-details flow" id="capsule-tab" tabIndex="0" role="tabpanel">
                    <header className='flow flow--space-small'>
                        <h2 className='fs-600 uppercase ff-sans-cond'>THE TERMINOLOGY…</h2>
                        <p className="fs-700 uppercase ff-serif">SPACE CAPSULE</p>
                    </header>
                    <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>       
                </article>
                <picture id="launch-image">
                    <source srcSet={spaceLaunchP + ' x1'} type="image/webp"/>
                    <img src={spaceLaunch} alt="launch vehicle" />
                </picture>
                <picture id="port-image" hidden>
                    <source srcSet={portP + ' x1'} type="image/webp"/>
                    <img src={port} alt="spaceport" />
                </picture>
                <picture id="capsule-image" hidden>
                    <source srcSet={capsuleP + ' x1'} type="image/webp"/>
                    <img src={capsule} alt="spaceport" />
                </picture>
            </div>
        </main>
    )
}

export default Technology
