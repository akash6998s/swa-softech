import React from 'react';
import './RoadMap.css';
import Roadmap from "../Images/roadmap.png"

const RoadMap = () => {
    return (
        <div className="roadmap-container">
            <div className='roadmap'>
                <div className="roadmap-header">
                    <div className="roadmap-heading"><h1><span className='text-road'>Road</span> <span className='text-map'>Map</span></h1></div>
                    <div className="roadmap-sub-heading">The road map of our business system</div>
                </div>

                <div className="roadmap-boxes">
                    <div className="roadmap-box roadmap-box-1 roadmap-1">
                        <div className="roadmap-date">Jan 2017 - March 2018</div>
                        <div className="roadmap-title">Marketing Campaign</div>
                        <div className="roadmap-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.</div>
                    </div>
                    <div className="roadmap-box-middle roadmap-2">
                        <div className="roadmap-box ">
                            <div className="roadmap-date">Jan 2017 - March 2018</div>
                            <div className="roadmap-title">Marketing Campaign</div>
                            <div className="roadmap-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.</div>
                        </div>
                        <div className="roadmap-box roadmap-3">
                            <div className="roadmap-date">Jan 2017 - March 2018</div>
                            <div className="roadmap-title">Marketing Campaign</div>
                            <div className="roadmap-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.</div>
                        </div>
                    </div>
                    <div className="roadmap-img">
                        <img src={Roadmap} alt="roadmap" />
                    </div>
                    <div className="roadmap-box-middle">
                        <div className="roadmap-box roadmap-4">
                            <div className="roadmap-date">Jan 2017 - March 2018</div>
                            <div className="roadmap-title">Marketing Campaign</div>
                            <div className="roadmap-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.</div>
                        </div>
                        <div className="roadmap-box roadmap-5">
                            <div className="roadmap-date">Jan 2017 - March 2018</div>
                            <div className="roadmap-title">Marketing Campaign</div>
                            <div className="roadmap-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.</div>
                        </div>
                    </div>
                    <div className="roadmap-box roadmap-6 roadmap-box-6">
                        <div className="roadmap-date">Jan 2017 - March 2018</div>
                        <div className="roadmap-title">Marketing Campaign</div>
                        <div className="roadmap-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap
