import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing';
import Projects from './components/Projects';
import Services from './components/Services';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import content from './content';

function App(props) {
  const [state] = useState({
    nav_on: false,
    content: content,
    navigation: content.navigation
  });
  const path = props.history.location.pathname;

  return (
    <div className='App'>
      {path !== '/' && <Navigation navigation={state.navigation} />}
      <Route
        exact
        path='/'
        render={props => (
          <Landing
            content={state.content.landing}
            navigation={state.navigation}
          />
        )}
      />
      <Route path='/projects' render={props => <Projects />} />
      <Route path='/services' render={props => <Services />} />
      <Route path='/blog' render={props => <Blog />} />
      <Route path='/about' render={props => <About />} />
      <Route path='/contact' render={props => <Contact />} />
      <Footer />
    </div>
  );
}

export default App;
