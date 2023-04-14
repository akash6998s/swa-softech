import React from 'react';
import './News.css';
import one from '../Images/pic1.jpg';
import two from '../Images/pic2.jpg';
import three from '../Images/pic3.jpg';
import four from '../Images/pic4.jpg';
import five from '../Images/pic5.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const News = () => {
    return (
        <div className="news-container">
            <div className='news'>
                <div className="news-header">
                    <div className="news-heading-left">
                        <h1><span className='text-latest'>Latest </span><span className='text-news'> News </span></h1>
                        <h4>Let,s see our latest post</h4>
                    </div>
                    <div className="news-heading-right">
                        <p> <span className='text-total-post'> Total Post /</span> <span className='text-17'> 17 </span></p>
                    </div>
                </div>
                <div className="news-posts">
                    <div className="news-post">
                        <div className="post-img">
                            <img src={one} alt="" />
                        </div>
                        <div className="post-desc">
                            <div className="post-desc-header">
                                <div className="post-date">25th January , 2021</div>
                                <div className="post-seen">7 min Read</div>
                            </div>
                            <div className="post-title">Frequency Asked Questions title Adipiscing lorem ipsum dolor lobortis interdum</div>
                            <div className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar elementum. Nibh purus integer elementum in. Tellus vulputate habitasse ut diam. Auctor sit elementum.</div>
                            <div className="post-read">Read More <FontAwesomeIcon icon={faArrowRight} /></div>
                        </div>
                    </div>

                    <div className="news-post">
                        <div className="post-img">
                            <img src={two} alt="" />
                        </div>
                        <div className="post-desc">
                            <div className="post-desc-header">
                                <div className="post-date">25th January , 2021</div>
                                <div className="post-seen">7 min Read</div>
                            </div>
                            <div className="post-title">Frequency Asked Questions title Adipiscing lorem ipsum dolor lobortis interdum</div>
                            <div className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar elementum. Nibh purus integer elementum in. Tellus vulputate habitasse ut diam. Auctor sit elementum.</div>
                            <div className="post-read">Read More <FontAwesomeIcon icon={faArrowRight} /></div>
                        </div>
                    </div>

                    <div className="news-post">
                        <div className="post-img">
                            <img src={three} alt="" />
                        </div>
                        <div className="post-desc">
                            <div className="post-desc-header">
                                <div className="post-date">25th January , 2021</div>
                                <div className="post-seen">7 min Read</div>
                            </div>
                            <div className="post-title">Frequency Asked Questions title Adipiscing lorem ipsum dolor lobortis interdum</div>
                            <div className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar elementum. Nibh purus integer elementum in. Tellus vulputate habitasse ut diam. Auctor sit elementum.</div>
                            <div className="post-read">Read More <FontAwesomeIcon icon={faArrowRight} /></div>
                        </div>
                    </div>

                    <div className="news-post">
                        <div className="post-img">
                            <img src={four} alt="" />
                        </div>
                        <div className="post-desc">
                            <div className="post-desc-header">
                                <div className="post-date">25th January , 2021</div>
                                <div className="post-seen">7 min Read</div>
                            </div>
                            <div className="post-title">Frequency Asked Questions title Adipiscing lorem ipsum dolor lobortis interdum</div>
                            <div className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar elementum. Nibh purus integer elementum in. Tellus vulputate habitasse ut diam. Auctor sit elementum.</div>
                            <div className="post-read">Read More <FontAwesomeIcon icon={faArrowRight} /></div>
                        </div>
                    </div>

                    <div className="news-post">
                        <div className="post-img">
                            <img src={five} alt="" />
                        </div>
                        <div className="post-desc">
                            <div className="post-desc-header">
                                <div className="post-date">25th January , 2021</div>
                                <div className="post-seen">7 min Read</div>
                            </div>
                            <div className="post-title">Frequency Asked Questions title Adipiscing lorem ipsum dolor lobortis interdum</div>
                            <div className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lobortis in in tortor lectus iaculis viverra. Adipiscing lobortis interdum fringilla euismod odio vitae nam pulvinar elementum. Nibh purus integer elementum in. Tellus vulputate habitasse ut diam. Auctor sit elementum.</div>
                            <div className="post-read">Read More <FontAwesomeIcon icon={faArrowRight} /></div>
                        </div>
                    </div>
                </div>
                <div className="discover-more"><button>Discover More <FontAwesomeIcon icon={faArrowRight} size="xl" /></button></div>
            </div>
        </div>
    )
}

export default News
