import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import kumbaj from '../images/kumbhaj.png'


const Team = () => {
  return (
    <>
        <div id="team" className="team_page">
            <h1 >Our Team</h1>
            <div className="mt-10 team_caro_container w-[90%] mx-[auto] overflow-hidden ">
                <Carousel autoPlay={true} centerMode={true} centerSlidePercentage={100} infiniteLoop={true}  swipeable={true} showArrows={false} showStatus={true} showIndicators={false} useKeyboardArrows={true}>
                {/* team card 2 */}
                <div className="teamCard shadow-xl">
                    <div className='img'>
                        <img src={kumbaj} alt="kumbaj" />
                    </div>
                    <div className="txt">
                        <h3>Kumbaj Shukla</h3>
                        <p className='text-gray-600'>(Technical Dehadi dar)</p>
                        <div>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                        </div>
                    </div>
                </div>
                {/* team card 2 */}
                <div className="teamCard shadow-xl">
                    <div className='img'>
                        <img src={kumbaj} alt="kumbaj" />
                    </div>
                    <div className="txt">
                        <h3>Kumbaj Shukla</h3>
                        <p className='text-gray-600'>(Technical Dehadi dar)</p>
                        <div>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                        </div>
                    </div>
                </div>
                {/* team card 3 */}
                <div className="teamCard shadow-xl">
                    <div className='img'>
                        <img src={kumbaj} alt="kumbaj" />
                    </div>
                    <div className="txt">
                        <h3>Kumbaj Shukla</h3>
                        <p className='text-gray-600'>(Technical Dehadi dar)</p>
                        <div>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                        </div>
                    </div>
                </div>

                {/* instead this use map method by making data.js for team */}
                </Carousel>
            </div>
        </div>
    </>
  )
}

export default Team