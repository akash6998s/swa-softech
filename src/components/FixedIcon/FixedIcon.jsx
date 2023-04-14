import React from 'react';
import './FixedIcon.css';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FixedIcon = () => {
  return (
    <div className='fixed-icon'>
    <FontAwesomeIcon icon={faChevronUp} />
    </div>
  )
}

export default FixedIcon
