import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

// style sheets
import { GlobalStyles } from "./styles";

// components
import Contact from "./components/Contact";
import ErrorPage from "./components/404";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Writing from "./components/Writing";

function App({ history }) {
  // dynamically detect viewport width
  const [window_width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const path = history.location.pathname;

  return (
    <>
      <GlobalStyles />

      <Styles>
        {path !== "/" && <Navigation window_width={window_width} />}
        <div className="main-content">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home window_width={window_width} />}
            />
            <Route
              path="/projects"
              render={(props) => <Projects window_width={window_width} />}
            />
            <Route
              path="/writing"
              render={(props) => (
                <Writing {...props} window_width={window_width} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => <Contact contact_page />}
            />
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
  @media (max-width: 500px) {
    min-height: none;
  }
`;
