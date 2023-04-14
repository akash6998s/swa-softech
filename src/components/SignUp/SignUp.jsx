import React from 'react';
import './SignUp.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignUp = () => {
  return (
    <div className='signup-container'>
      <div className="signup">
        <div className="signup-head">
          <h1>Sign Up to <span className='text-cryptohouse'> CryptoHouse </span></h1>
        </div>
        <div className="signup-para">
          <p>Stay connected world best secured  cryptocurrency</p>
        </div>
        <div className="email">
          <input type="email" placeholder='enter your email adress' />
        </div>
        <div className="submit"><button type='submit'>Continue <FontAwesomeIcon icon={faArrowRight} /></button></div>
      </div>
      <div className="signup-bottom">
        <h4>Already have account ? <span className='text-signin'> Sign In </span></h4>
      </div>

      <div className="signup-footer">
        <div className="signup-footer-1">
          <div className="column-1">
            <h1>CryptoHouse</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.</p>
          </div>
          <div className="column-2">
            <div className="row-1"><ul>
              <li>About</li>
              <li>Statistic</li>
              <li>Team</li>
              <li>Contact</li>
            </ul></div>
            <div className="row-2">
              <ul>
                <li>Token</li>
                <li>RoadMap</li>
                <li>Blog</li>
                <li>Error</li>
              </ul>
            </div>
          </div>
          <div className="column-3">
            <h1>Follow Us</h1>
            <div className="signup-footer-social">
              <div className="footer-social">
                <div className="social-icon">  <i class="fa-brands fa-facebook"></i>  </div>
                <div className="social-icon">  <i class="fa-brands fa-twitter"></i>  </div>
                <div className="social-icon">  <i class="fa-brands fa-instagram"></i> </div>
                <div className="social-icon">  <i class="fa-brands fa-youtube"></i>  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="signup-footer-2">

        </div>
      </div>
    </div>
  )
}

export default SignUp
