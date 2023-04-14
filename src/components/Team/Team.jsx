import React from 'react';
import './Team.css';
import member1 from '../Images/member1.jpg'
import member2 from '../Images/member2.jpg'
import member3 from '../Images/member3.jpg'
import member4 from '../Images/member4.jpg'
import member5 from '../Images/member5.jpg'
import member6 from '../Images/member6.jpg'

const Team = () => {
    return (
        <div className="team-   container">
            <div className='team'>
                <div className="team-header">
                    <h1><span className='text-team'> Team </span><span className='text-member'> Member </span></h1>
                    <h6>Let,s Meet our Advisory Team & Expert</h6>
                </div>
                <div className="team-members">
                    <div className="member">
                        <div className="team-circle">
                            <div className="member-pic">
                                <img src={member1} alt="member-1" />
                            </div>
                        </div>
                        <div className="member-name">
                            <h1>Siktama Shanghai</h1>
                        </div>
                        <div className="member-profile">
                            <p>UI / UX Designer</p>
                        </div>
                    </div>

                    <div className="member">
                        <div className="team-circle">
                            <div className="member-pic">
                                <img src={member2} alt="member-1" />
                            </div>
                        </div>
                        <div className="member-name">
                            <h1>Siktama Shanghai</h1>
                        </div>
                        <div className="member-profile">
                            <p>UI / UX Designer</p>
                        </div>
                    </div>

                    <div className="member">
                        <div className="team-circle">
                            <div className="member-pic">
                                <img src={member3} alt="member-1" />
                            </div>
                        </div>
                        <div className="member-name">
                            <h1>Siktama Shanghai</h1>
                        </div>
                        <div className="member-profile">
                            <p>UI / UX Designer</p>
                        </div>
                    </div>
                </div>

                <div className="team-members">
                    <div className="member">
                        <div className="team-circle">
                            <div className="member-pic">
                                <img src={member4} alt="member-1" />
                            </div>
                        </div>
                        <div className="member-name">
                            <h1>Siktama Shanghai</h1>
                        </div>
                        <div className="member-profile">
                            <p>UI / UX Designer</p>
                        </div>
                    </div>

                    <div className="member">
                        <div className="team-circle">
                            <div className="member-pic">
                                <img src={member5} alt="member-1" />
                            </div>
                        </div>
                        <div className="member-name">
                            <h1>Siktama Shanghai</h1>
                        </div>
                        <div className="member-profile">
                            <p>UI / UX Designer</p>
                        </div>
                    </div>

                    <div className="member">
                        <div className="team-circle">
                            <div className="member-pic">
                                <img src={member6} alt="member-1" />
                            </div>
                        </div>
                        <div className="member-name">
                            <h1>Siktama Shanghai</h1>
                        </div>
                        <div className="member-profile">
                            <p>UI / UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
