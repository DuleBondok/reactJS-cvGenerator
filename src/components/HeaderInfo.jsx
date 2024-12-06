import React from "react";

function HeaderInfo() {
  return (
    <div className="headerDiv">
      <p1 className="madebyParagraph">
        <a
          href="https://github.com/DuleBondok"
          target="_blank"
          className="githubLink"
        >
          Made by DuleBondok
        </a>
        <img src="./public/github.png" className="githubImg"></img>
      </p1>
      <h1 className="mainHeader">CV Generator</h1>
      <p className="headerText">
        Create your CV by filling out the forms below! Your CV will be
        dynamically updated in the preview.
      </p>
    </div>
  );
}

export default HeaderInfo;
