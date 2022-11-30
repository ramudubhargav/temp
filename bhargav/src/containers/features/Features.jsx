import React from 'react';
import ai from './ai.png';
import './features.css';

const Features = () => (
  <div className="abd__features section__padding" id="features">
    <div className="abd__features-heading">
      <h1 className="gradient__text">About event</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate, delectus architecto sunt culpa quibusdam vero expedita eius reiciendis dignissimos molestias fuga odit quos non. Doloremque obcaecati inventore saepe unde?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nostrum non inventore iusto adipisci quis asperiores a nam suscipit voluptates architecto harum eveniet quidem accusantium, quia soluta, nisi recusandae optio.</p>
    </div>
    <div className="abd__features-container gradient__text">
      <div className="abd__header-image">
        <img src={ai} />
      </div>
    </div>
  </div>
);

export default Features;
