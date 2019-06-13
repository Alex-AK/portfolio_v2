import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

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
import content from './content/main';

function App(props) {
  const [state] = useState({
    content: content,
    navigation: content.navigation
  });
  const path = props.history.location.pathname;

  return (
    <Styles>
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
          <Route path='/projects' component={Projects} />
          <Route path='/services' component={Services} />
          <Route path='/writing' component={Writing} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    </Styles>
  );
}

export default App;

const Styles = styled.div`
  min-height: 100vh;
`;
