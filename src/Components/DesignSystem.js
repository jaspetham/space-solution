import './DesignSystem.css';

const DesignSystem = () => {
    return (
        <section id="designSystem" className='bg-dark text-white'>
            <div className="container" style={{
                marginTop:'2rem'
            }}>
            <h1 className='ff-sans fs-600 letter-spacing-2 uppercase'>Design system</h1>
                <section id="colors">
                    <h2 className='numbered-title'><span>01</span> colors</h2>
                    <div className="flex">
                        <div className='flex-grow-1 flow'>
                            <div className="bg-dark text-white" style={{
                                    padding:'3rem 1rem 1rem',
                                    border:'1px solid white'
                                }}>
                                #0B0D17
                            </div>
                            <p><span className="text-light">RGB</span> 11, 13, 23</p>
                            <p><span className="text-light">HSL</span> 230°, 35%, 7%</p>
                        </div>
                        <div className='flex-grow-1 flow'>
                            <div className="bg-light text-dark" style={{
                                    padding:'3rem 1rem 1rem',
                                    border:'1px solid white'
                                }}>
                                #D0D6F9
                            </div>
                            <p><span className="text-light">RGB</span> 208, 214, 249</p>
                            <p><span className="text-light">HSL</span> 231°, 77%, 90%</p>
                        </div>
                        <div className='flex-grow-1 flow'>
                            <div className="bg-white text-dark" style={{
                                    padding:'3rem 1rem 1rem',
                                    border:'1px solid white'
                                }}>
                                #FFFFFF
                            </div>
                            <p><span className="text-light">RGB</span> 255, 255, 255</p>
                            <p><span className="text-light">HSL</span> 0°, 0%, 100%</p>
                        </div>       
                    </div> 
                </section>
                <section id="typography">
                    <h2 className='numbered-title'><span>02 </span>Typography</h2>
                    <div className="flex">
                        <div className="flex-basis-100 flow flow-space">
                            <div> 
                                <p className='text-light'>Heading 1 - Bellefair Regular - 150px</p>
                                <p className='fs-900 ff-serif uppercase'>Earth</p>
                            </div>
                            <div> 
                                <p className='text-light'>Heading 2 - Bellefair Regular - 100px</p>
                                <p className='fs-800 ff-serif uppercase'>Venus</p>
                            </div>
                            <div> 
                                <p className='text-light'>Heading 3 - Bellefair Regular - 56px</p>
                                <p className='fs-700 ff-serif uppercase'>Jupiter & Saturn</p>
                            </div>
                            <div> 
                                <p className='text-light'>Heading 4 - Bellefair Regular - 32px</p>
                                <p className='fs-600 ff-serif uppercase'>Uranus, Neptune, & Pluto</p>
                            </div>
                            <div> 
                                <p className='text-light'>Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                                <p className='fs-500 ff-sans-cond uppercase letter-spacing-1'>So, you want to travel to space</p>
                            </div>
                        
                        </div>
                        
                        <div  className="flex-basis-100 flow flow-space">
                            <div> 
                                <p className='text-light'>Subheading 1 - Bellefair Regular - 28px</p>
                                <p className='fs-400 ff-serif uppercase'>384,400 km</p>
                            </div>
                            <div> 
                                <p className='text-light'>Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                                <p className='fs-300 ff-sans-cond uppercase letter-spacing-3'>Avg. Distance</p>
                            </div>
                            <div> 
                                <p className='text-light'>Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                                <p className='fs-200 ff-sans-cond uppercase letter-spacing-2'>Europa</p>
                            </div>
                            <div> 
                                <p className='text-light'>Body Text</p>
                                <p className='fs-100 ff-serif uppercase'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flow" id="interactive-elements">
                    <h2 className="numbered-title"><span>03</span> Interactive elements</h2>
                    
                    {/* <!-- navigation --> */}
                    <div>
                        <nav>
                            <ul className="primary-navigation underline-indicators flex">
                                <li className='active'><a className="uppercase text-white letter-spacing-2" href="#"><span>01</span> Active</a></li>
                                <li><a className="uppercase text-white letter-spacing-2" href="#"><span>02</span> Hovered</a></li>
                                <li><a className="uppercase text-white letter-spacing-2" href="#"><span>03</span> Idle</a></li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="flex indicator-wrap">
                        <div style={{
                            marginTop:'5rem'
                        }}>
                            {/* <!-- explore button --> */}
                            <a href="#" className="large-button fs-600 ff-serif uppercase text-dark bg-white">
                                Explore
                            </a>
                        </div>
                        
                        <div className='flow flow-space'
                            style={{
                                marginBottom:'50vh'
                            }} 
                        >
                            {/* <!-- Tabs --> */}
                            <div className="tab-list underline-indicators flex">
                                <button aria-selected="true" className="uppercase text-light letter-spacing-1 ff-sans-cond">Moon</button>
                                <button aria-selected="false" className="uppercase text-light letter-spacing-1 ff-sans-cond">Mars</button>
                                <button aria-selected="false" className="uppercase text-light letter-spacing-1 ff-sans-cond">Europa</button>
                            </div>
                            
                            {/* <!-- Dots --> */}
                            <div className="dot-indicators flex justify-content-center">
                                <button aria-selected="true"><span className="sr-only">Slide title</span></button>
                                <button aria-selected="false"><span className="sr-only">Slide title</span></button>
                                <button aria-selected="false"><span className="sr-only">Slide title</span></button>
                            </div>
                            
                            {/* <!-- Numbers --> */}
                            <div className="number-indicators grid place-content-center">
                                <button aria-selected="true" className='grid place-content-center'><span className="ff-sans fs-600">1</span></button>
                                <button aria-selected="false" className='grid place-content-center'><span className="ff-sans fs-600">2</span></button>
                                <button aria-selected="false" className='grid place-content-center'><span className="ff-sans fs-600">3</span></button>
                            </div>
                        </div>
                    </div>
                    
                </section>
            
            </div>
        </section>
    )
}

export default DesignSystem
