import React from 'react';
import './Heading.css';  // Import the CSS file

interface propsType {
  title: string;
}

function Heading ({title}: propsType) {
  return (
    <div className='heading-container'>
        <p className='heading-title'>{title}</p>
    </div>
  );
}

export default Heading;