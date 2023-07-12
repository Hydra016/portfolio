import React from "react";
import Image from "next/image";

const CarouselItem = ({
  content,
  title,
  myImage,
  projectLink,
  projectGithubLink,
}) => {
  return (
    <div className="project-slide">
      <div className="project-description">
        <h1 className="project-heading">{title}</h1>
        <div className="content-container">
          <span className="project-text">{content}</span>
          <div className="project-link-box">
              {projectLink ? <a className="project-link" href={projectLink} target="_blank">
              <img
                src="https://img.icons8.com/ios/256/link.png"
                className="project-link-icon"
              />
              </a> : null}
              
              <a
                className="project-link"
                href={projectGithubLink}
                target="_blank"
              >
                              <img
                src="https://img.icons8.com/material-outlined/256/github.png"
                className="project-link-icon"
              />
              </a>
          </div>
        </div>
      </div>
      <Image className="carousel-img" src={myImage} />
    </div>
  );
};

export default CarouselItem;
