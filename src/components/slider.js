import React from 'react';
import { Zoom } from 'react-slideshow-image';
import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.png'
import slider3 from '../images/slider3.png'
const Slideshow = () => {
  const images = [
    slider1,
    slider2,
    slider3
  ];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4
  }
  return (
    <div>
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} />
            <div className='Heading'><h1>Welcome to Khalid Bin Waleed Institute</h1>
            <button>Apply Now</button></div>
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;
