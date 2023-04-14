import React from 'react';
import "./Clip.css";
import Video from '../Images/video.jpg';

const Clip = () => {
    return (
        <div className="clip-container">
            <div className='clip'>
                <div className="clip-header">
                    <div className="clip-heading"><h1>See a short Clip Why its Important</h1></div>
                    <div className="clip-para"><p> Tellus vulputate habitasse ut diam. Auctor sit elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar elementum.</p></div>
                </div>
                <div className="video">
                    <img className='clip-img' src={Video} alt="" />
                </div>
                <div className="banner">
                    <div className="banner-columns">
                        <div className="banner-column">
                            <div className="banner-icon">
                                <h1>ICON</h1>
                            </div>
                            <div className="banner-heading">
                                <h1>Exchange Balance</h1>
                            </div>
                            <div className="banner-para">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.
                            </div>
                        </div>
                        <div className="banner-column">
                            <div className="banner-icon">
                                <h1>ICON</h1>
                            </div>
                            <div className="banner-heading">
                                <h1>Exchange Balance</h1>
                            </div>
                            <div className="banner-para">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.
                            </div>
                        </div>
                        <div className="banner-column">
                            <div className="banner-icon">
                                <h1>ICON</h1>
                            </div>
                            <div className="banner-heading">
                                <h1>Exchange Balance</h1>
                            </div>
                            <div className="banner-para">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clip
