import React from "react";
import Markdown from "markdown-to-jsx";

import { Link } from "react-router-dom";

export const renderIntroduction = (title, mainImage, intro, content) => (
  <>
    <h3 className="post-title heavy">{title}</h3>
    <div className="introduction">
      <div className="landing-image">
        {mainImage && (
          <>
            <img src={mainImage.fields.file.url} alt={mainImage.fields.title} />
            <p className="caption">{mainImage.fields.description}</p>
          </>
        )}
      </div>

      <p>{intro}</p>
      {mainImage && <h4>Overview</h4>}
      <Markdown>{content}</Markdown>
    </div>
  </>
);

export const renderSummary = (projectSummary) => (
  <>
    <h4>Summary</h4>
    <Markdown>{projectSummary}</Markdown>
  </>
);

export const mapImages = (images) => (
  <>
    <h4>Project Images</h4>
    {images.map((image) => {
      return (
        <div className="image-container" key={image.fields.title}>
          <img src={image.fields.file.url} alt={image.fields.title} />
          <p className="caption">{image.fields.description}</p>
        </div>
      );
    })}
  </>
);

export const mapFeatures = (features) => (
  <>
    <h4>Features</h4>
    {features.map((feature) => (
      <ul key={feature}>
        <li>{feature}</li>
      </ul>
    ))}
  </>
);

export const renderTechnologyAndContributors = (technology, contributors) => (
  <div className="contributors-technology">
    <div>
      {technology && (
        <>
          <h4>Technologies Used</h4>
          {mapTechnology(technology)}
        </>
      )}
    </div>
    <div>
      {contributors && (
        <>
          <h4>Contributors</h4>
          {mapContributors(contributors)}
        </>
      )}
    </div>
  </div>
);

const mapContributors = (contributors) =>
  contributors.map((contributor) => (
    <ul key={contributor.name}>
      <li>
        <a href={contributor.link} target="_blank" rel="noopener noreferrer">
          {contributor.name}
        </a>
      </li>
    </ul>
  ));

const mapTechnology = (technology) =>
  technology.map((tech) => (
    <ul key={tech}>
      <li>{tech}</li>
    </ul>
  ));

export const renderTestimonial = (testimonial) => {
  return (
    <div>
      {/* <p className='testimonial'>{testimonial}</p> */}
      {/* <p className='name'>{name}</p> */}
    </div>
  );
};

export const renderEnd = (inspired) => (
  <div className="end">
    <p>
      Written by{" "}
      <Link to="/about" className="hyperlink">
        Alex King
      </Link>
    </p>

    {inspired && renderInspired(inspired)}
  </div>
);

const renderInspired = (inspired) => {
  return (
    <p>
      Inspired by{" "}
      <a
        href={inspired.url}
        className="hyperlink"
        target="_blank"
        rel="noopener noreferrer"
      >
        {inspired.inspiredBy}
      </a>
    </p>
  );
};
