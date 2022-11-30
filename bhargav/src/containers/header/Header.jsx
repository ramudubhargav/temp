import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="abd__header section__padding" id="home">
    <div className="abd__header-image">
      <img src={ai} />
    </div>

    <div className="abd__header-content">
      <h1 className="gradient__text">Event title</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <h3>Timing</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
  </div>
);

export default Header;
