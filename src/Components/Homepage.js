import Header from './Header'
import './Homepage.css'

const Homepage = () => {
    return (
        <section id="home">
            <Header/>
            {/* <div className="flex container evenly-columns" style={{
                maxWidth:'60rem'
            }}>
                <div>
                    <h1 className='text-light fs-500 ff-sans-cond uppercase letter-spacing-1'>
                        So, you want to travel to
                        <span className='fs-900 ff-serif text-white d-block'>Space</span>
                    </h1>
                    <p className="text-white">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore</p>
                </div>
                <div>
                    <a href="#" className="large-button fs-600 ff-serif uppercase text-dark bg-white">
                        Explore
                    </a>
                </div>
            </div> */}
            <div className="grid-container grid-container--home">
                <div>
                    <h1 className='text-light fs-500 ff-sans-cond uppercase letter-spacing-1'>
                        So, you want to travel to
                        <span className='fs-900 ff-serif text-white d-block'>Space</span>
                    </h1>
                    <p className="text-white">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore</p>
                </div>
                <div>
                    <a href="#" className="large-button ff-serif uppercase text-dark bg-white">
                        Explore
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Homepage
