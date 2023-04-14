import React from 'react';
import './FooterTop.css';

const FooterTop = () => {
    return (
        <div className='footer-top'>
            <div className="footer-columns">
                <div className="footer-column footer-column-1">
                    <div className="footer-logo">
                        <h1>CryptoHouse</h1>
                    </div>
                    <div className="footer-para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor nam pulvinar elementum.
                    </div>
                    <div className="footer-social">
                        <div className="social-icon">  <i class="fa-brands fa-facebook"></i>  </div>
                        <div className="social-icon">  <i class="fa-brands fa-twitter"></i>  </div>
                        <div className="social-icon">  <i class="fa-brands fa-instagram"></i> </div>
                        <div className="social-icon">  <i class="fa-brands fa-youtube"></i>  </div>
                    </div>
                </div>
                <div className="footer-column">
                    <h4>Sitemap</h4>
                    <div className="column-slide">
                        <div>
                            <h5>About</h5>
                            <h5>Token</h5>
                            <h5>Statistic</h5>
                            <h5>Roadmap</h5>
                        </div>
                        <div>
                            <h5>Team</h5>
                            <h5>Blog</h5>
                            <h5>Contact</h5>
                            <h5>Error</h5>
                        </div>
                    </div>
                </div>
                <div className="footer-column link">
                    <h4>Link</h4>
                    <h5>Helps & FAQ</h5>
                    <h5>Terms & Conditions</h5>
                    <h5>Privacy Policy</h5>
                </div>
                <div className="footer-column footer-column-4">
                    <h4>Newsletter</h4>
                    <h5>Subscribe our newsletter for get Update</h5>
                    <div className="search">
                        <input type="text" placeholder='Enter your email adress' />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop
