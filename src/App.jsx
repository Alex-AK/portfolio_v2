import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Projects from './components/Projects';
import Services from './components/Services';
import Writing from './components/Writing';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorPage from './components/404';

import { GlobalStyles } from './styles';
import content from './content';

function App(props) {
  const [state] = useState({
    content: content,
    navigation: content.navigation
  });
  const path = props.history.location.pathname;

  return (
    <>
      <GlobalStyles />
      <div className='App'>
        {path !== '/' && <Navigation navigation={state.navigation} />}

        <Switch>
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
          <Route path='/writing' render={props => <Writing />} />
          <Route path='/about' render={props => <About />} />
          <Route path='/contact' render={props => <Contact />} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
