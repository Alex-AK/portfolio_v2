import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// components
import Button from "../General/Button";

// assets
import alex_photo from "../../assets/alex_king_portfolio.jpg";
import coffee_menu from "../../assets/coffee-background-landing.jpg";
import content from "../../content/main";

const Home = ({ window_width }) => {
  const { landing, navigation } = content;

  return (
    <>
      <h1 style={{ height: 60 }} className="SEO">
        Alex King - Software Engineer - Seattle, Wa.
      </h1>
      <Styles>
        <img
          className="profile-image"
          src={alex_photo}
          alt="Alex King, Software Engineer"
        />
        <img className="coffee-menu" src={coffee_menu} alt="coffee menu" />

        <div>
          <h1>{landing.title}</h1>
          <h3>
            {landing.sub_title} I'm currently developing and solving problems
            for a
            <a
              href="https://brainsquall.co"
              className="hyperlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Seattle startup.
            </a>
            Take a look at my
            <Link to="/projects" className="hyperlink">
              projects
            </Link>
            or
            <Link to="/writing" className="hyperlink">
              writing.
            </Link>
            If you'd like to work with me
            <Link to="/contact" className="hyperlink">
              reach out.
            </Link>
          </h3>

          <h3>
            <Link to="/contact" className="hyperlink no-left-margin">
              Looking for mentorship?
            </Link>
          </h3>

          <div className={window_width <= 400 ? "buttons small" : "buttons"}>
            {navigation.map((button) => {
              return <Button title={button} key={button} />;
            })}
          </div>
        </div>
      </Styles>
    </>
  );
};

export default Home;

const Styles = styled.div`
  max-width: 1200px;
  min-height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0 5%;
  }

  @media (max-width: 450px) {
    min-height: none;
  }

  .profile-image {
    border-radius: 100%;
    width: 240px;
    margin-right: 80px;

    @media (max-width: 1000px) {
      margin: 30px 0 60px 0;
      width: 200px;
    }
  }

  .coffee-menu {
    position: fixed;
    z-index: -1;
    opacity: 0.08;
    left: 15%;
    top: 7%;
    height: 600px;

    @media (max-width: 1600px) {
      top: 4%;
      left: 4%;
    }
    @media (max-width: 1200px) {
      display: none;
    }
  }

  p {
    margin-top: 20px;
    font-size: 13px;
    font-weight: 500;
  }

  .buttons {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 60px 0 0 0;

    @media (max-width: 1000px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      margin: 40px 0 80px 0;
    }

    @media (max-width: 340px) {
      flex-wrap: wrap;

      .button {
        margin-bottom: 15px;
      }
    }
  }
`;
