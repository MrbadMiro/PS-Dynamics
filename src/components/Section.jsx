// src/components/Section.js
import React from 'react';
import cam from '../assets/cam.jpg' // Add your image in the src directory
import imgPic from '../assets/img.jpg'
function Section() {
  return (
    <>
      <div className="img">
        <img src={imgPic} alt="Camera" className='' />
      </div>
      <div className="center">
        <div className="title">
          Capture life's moments with precision and clarity—discover our premium cameras today!
        </div>
        <div className="btns">
          <button>Learn More</button>
          <button>Subscribe</button>
        </div>
      </div>

      <section className="about-us">
        <div className="about">
          <img src={cam} className="pic" alt="Camera" />
          <div className="text">
            <h2>About Us</h2>
            <h5>Empowering your vision with cutting-edge technology</h5>
            <p>
              At PX Dynamics, we believe that every moment deserves to be captured with stunning clarity and detail. Our mission is to provide photographers of all levels with top-of-the-line cameras and accessories that enhance their creative vision.
            </p>
            <div className="data">
              <a href="#" className="hire">Hire Me</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
