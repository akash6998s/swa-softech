import React from 'react';
import Images from '../Images/one.png'
import "./Home.css";
import TokenInfo from '../TokenInfo/TokenInfo';
import TimeLeft from '../TimeLeft/TimeLeft';
import News from '../News/News';
import Team from '../Team/Team';
import RoadMap from '../RoadMap/RoadMap';
import Rate from '../Rate/Rate';
import Clip from '../Clip/Clip';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const home = () => {
    return (
        <div className="container">
            <div className='home'>
                <div className="home-main">
                    <div className="home-img">
                        <img src={Images} alt="Images" />
                    </div>
                    <div className="home-text">
                        <div className="home-heading">
                            Invest Money Right Way  with CryptoHouse
                        </div>
                        <div className="home-para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.
                        </div>
                        <button className='home-btn'>Discover More <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#000349" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,80C384,53,480,43,576,64C672,85,768,139,864,138.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <TokenInfo />
                <TimeLeft />
                <RoadMap />
                <Rate />
                <Team />
                <Clip />
                <News />
            </div>
        </div>

    )
}

export default home
