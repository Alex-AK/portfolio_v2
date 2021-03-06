import React from "react";
import styled from "styled-components";

const Contact = ({ contact_page }) => {
  return (
    <Styles
      style={
        contact_page
          ? { minHeight: "calc(100vh - 140px)" }
          : { margin: "100px 0" }
      }
    >
      <div>
        <h1>Contact Me.</h1>
        <h4>
          I offer software and web development services as well as free initial
          consultations. If you're looking for support on a new or existing
          project, reach me directly at
          <a
            href="mailto:hello@alex-ak.com"
            className="hyperlink no-right-margin"
          >
            hello@alex-ak.com
          </a>
          .
        </h4>
        <h4 className="extra-top-margin">
          I look forward to speaking with you.
        </h4>
      </div>
    </Styles>
  );
};

export default Contact;

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    margin: 0 5%;
  }
`;
