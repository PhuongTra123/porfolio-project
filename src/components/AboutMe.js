import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="container py-5 ">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam accusantium quo iusto mollitia ab
            saepe, numquam illum delectus placeat quibusdam voluptate voluptatem incidunt dignissimos dolore
            reprehenderit sit excepturi eveniet aperiam rerum repellendus natus sapiente. Assumenda, ab? Ab
            necessitatibus, eligendi in non vero quidem asperiores veniam impedit sunt consectetur maxime! Architecto
            nulla a illo, modi atque perferendis error, vero dicta earum aspernatur suscipit alias laborum repellendus
            odio nisi? Nisi aperiam ex sint itaque possimus ipsa veritatis, ab omnis magnam modi quis exercitationem
            blanditiis, quasi similique cum repudiandae voluptate, ratione ipsum corporis facilis! Culpa amet explicabo
            cumque nulla, blanditiis sed ipsa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
