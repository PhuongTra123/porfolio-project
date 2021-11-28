import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div className="container py-5 ">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
                <img className="profile-img" src={author} alt="author" />
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Tran Thi Phuong Tra is a director of brand marketing, with experience managing global teams and
            multi-million-dollar campaigns. Her background in brand strategy, visual design, and account management
            inform her mindful but competitive approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
