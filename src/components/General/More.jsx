import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// theme
import { colors } from "../../styles/Global";

const More = ({ title, links }) => {
  const { github, live_site } = links;

  return (
    <Styles>
      {live_site && (
        <a href={live_site} target="_blank" rel="noopener noreferrer">
          <div className="button small">
            <span>View Site</span>
            <svg>
              <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
              <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
            </svg>
          </div>
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <div className="button small">
            <span>View Code</span>
            <svg>
              <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
              <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
            </svg>
          </div>
        </a>
      )}
      {title && (
        <Link to={{ pathname: "/writing", state: { queryString: title } }}>
          <div className="button small">
            <span>Read More</span>
            <svg>
              <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
              <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
            </svg>
          </div>
        </Link>
      )}
    </Styles>
  );
};

export default More;

const Styles = styled.div`
  display: flex;

  a {
    border-bottom: none !important;
    :hover {
      background: ${colors.background} !important;
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;
