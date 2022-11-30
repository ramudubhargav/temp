import React from 'react';

import { Footer, Possibility, Features, Header } from './containers';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Header />
    </div>
    <Possibility />
    <Features />
    <Footer />
  </div>
);

export default App;
