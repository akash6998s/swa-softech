import React from 'react';
import './TimeLeft.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TimeLeft = () => {
    return (
        <div className="curve">

            <div className="time-container">
                <div className='time-left'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="white" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,122.7C384,149,480,235,576,240C672,245,768,171,864,128C960,85,1056,75,1152,85.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <div className="time-header">
                        <div className="time-heading">
                            <h1>Time Left</h1>
                        </div>
                        <div className="time-sub-heading">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.</p>
                        </div>
                    </div>

                    <div className="time-circles">
                        <div className="circle-1">
                            <div className="circle">
                                <div className="sub-circle">
                                    <h1>00</h1>
                                </div>
                            </div>
                            <h1>days</h1>
                        </div>
                        <div className="circle-2">
                            <div className="circle">
                                <div className="sub-circle">
                                    <h1>00</h1>
                                </div>
                            </div>
                            <h1>days</h1>
                        </div>
                        <div className="circle-3">
                            <div className="circle">
                                <div className="sub-circle">
                                    <h1>00</h1>
                                </div>
                            </div>
                            <h1>days</h1>
                        </div>
                        <div className="circle-4">
                            <div className="circle">
                                <div className="sub-circle">
                                    <h1>00</h1>
                                </div>
                            </div>
                            <h1>days</h1>
                        </div>
                    </div>

                    <div className="time-box">
                        <div className="box-heading">
                            <h1>Join Today & Buy a Token</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="box-btn">
                            <div className="token"><button>Buy Token <span className='time-arrow'><FontAwesomeIcon icon={faArrowRight} /></span> </button> </div>

                        </div>
                    </div>
                </div>
                <svg className='time-curve' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="white" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,224C672,245,768,235,864,197.3C960,160,1056,96,1152,85.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default TimeLeft
