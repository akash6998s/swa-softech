import React from 'react';
import "./Top.css";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Top = () => {
    return (
        <div className='top'>
            <span className="top-left">
                <p> Bitcoin Rate $1756.38</p>  <FontAwesomeIcon icon={faArrowUp} color="red"/><p> 17.65% </p>
            </span>
            <span className="top-right">
                <p>  Language | BN <span className='text-en'> EN</span> RU </p>
            </span>
        </div>
    )
}

export default Top
