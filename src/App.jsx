import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Landing from './components/Landing';
import Projects from './components/Projects';
// import Services from './components/Services';
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

  const [window_width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const path = props.history.location.pathname;

  return (
    <>
      <GlobalStyles />
      <Styles>
        {path !== '/' && (
          <Navigation
            navigation={state.navigation}
            window_width={window_width}
          />
        )}
        <div className='main-content'>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Landing
                  content={state.content.landing}
                  navigation={state.navigation}
                  window_width={window_width}
                />
              )}
            />
            <Route path='/projects' component={Projects} />
            <Route path='/writing' component={Writing} />
            <Route path='/about' component={About} />
            <Route path='/contact' render={props => <Contact contact_page />} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Styles>
      <Footer />
    </>
  );
}

export default App;

const Styles = styled.div`
  min-height: calc(100vh - 70px);

  .main-content {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
