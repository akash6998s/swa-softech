import React from 'react';
import './Rate.css';
import Rateimg from '../Images/rate.png'

const Rate = () => {
    return (
        <div className="rate-container">
            <div className='rate'>
                <div className="rate-img">
                    <img src={Rateimg} alt="" />
                </div>
                <div className="rate-bar">
                    <div className="bar-desc">
                        <h1>165567</h1>
                        <p>Daily Batch User</p>
                    </div>
                    <div className="line"></div>
                    <div className="bar-desc">
                        <h1>0.759</h1>
                        <p>Average Rate</p>
                    </div>
                    <div className="line"></div>
                    <div className="bar-desc">
                        <h1>5.87</h1>
                        <p>Total Batches</p>
                    </div>
                    <div className="line"></div>
                    <div className="bar-desc">
                        <h1>70%</h1>
                        <p>Success Rate</p>
                    </div>
                </div>
            </div>
            <svg className='rate-curve-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="white" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,80C384,53,480,43,576,64C672,85,768,139,864,138.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
          <svg className='rate-curve-bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="white" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,117.3C672,107,768,149,864,144C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
        </div>
    )
}

export default Rate
