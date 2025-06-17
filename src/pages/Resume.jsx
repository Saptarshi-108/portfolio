import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>

      <div className="pdf-viewer">
        <iframe
          src="/Resume.pdf"
          title="Resume"
          width="100%"
          height="600px"
          frameBorder="0"
        />
      </div>

      <a
        href="/Resume.pdf"
        download="Saptarshi_Mandal_Resume.pdf"
        className="download-button"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
