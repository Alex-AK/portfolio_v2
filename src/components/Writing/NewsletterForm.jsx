import React, { useState } from "react";
import styled from "styled-components";

const NewsletterForm = ({ setInput }) => {
  const [input, setEmailInput] = useState("");

  return (
    <Styles id="mc_embed_signup">
      <form
        action="https://alex-ak.us3.list-manage.com/subscribe/post?u=42c39497353cbf8c4ccd8fa5b&amp;id=e0541b268e"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll" className="flex-horizontal">
          <div className="mc-field-group">
            <input
              type="email"
              placeholder="name@email.com"
              value={input}
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
          </div>

          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              left: "-5000px",
              ariaHidden: "true",
            }}
          >
            <input
              type="text"
              name="b_42c39497353cbf8c4ccd8fa5b_e0541b268e"
              tabIndex="-1"
              value=""
              onChange={() => setEmailInput("")}
            />
          </div>

          <input
            type="submit"
            value="Signup"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="submit_button"
          />
        </div>
      </form>
      <p
        className="sub_text"
        onClick={() => setInput("Newsletter Context & Privacy.")}
      >
        Newsletter <span className="hyperlink">Context and Privacy.</span>
      </p>
    </Styles>
  );
};

export default NewsletterForm;

const Styles = styled.div`
  margin-bottom: 15px;

  form {
    margin-top: 5px;
  }

  .flex-horizontal {
    display: flex;
  }

  input {
    border: none;
    background: #fcfcfa;
    border-top: 1px solid #d3d3d3;
    border-left: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    border-radius: 4px 0 0 4px;
    margin: 0 0 5px 0;
    padding: 5px;
    height: 26px;
    width: 190px;
    font-size: 13px;

    @media (max-width: 800px) {
      width: 152px;
    }

    &:focus {
      outline: none;
    }
  }

  .submit_button {
    border-top: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    font-size: 10px;
    letter-spacing: 1px;
    border-radius: 0 4px 4px 0;
    text-transform: uppercase;

    &:hover {
      background: #f9eee5;
      cursor: pointer;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;
