import React from "react";
import { useRef } from "react";
import html2canvas from "html2canvas";

function CvDisplay({
  firstName,
  professionalTitle,
  summaryAbout,
  emailAddress,
  phoneNumber,
  locationName,
  linkedIn,
  universityName,
  degree,
  startDate,
  endDate,
  award1,
  award2,
  positionName,
  companyName,
  startWork,
  endWork,
  respons1,
  respons2,
  skillCategory,
  skill1,
  skill2,
  skill3,
}) {
  const divRef = useRef();

  const handleDownload = () => {
    html2canvas(divRef.current).then((canvas) => {
      const imageUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "div-image.png";
      link.click();
    });
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>Print</title></head><body>");
    printWindow.document.write(divRef.current.innerHTML); // Add the content of the div
    printWindow.document.write("</body></html>");
    printWindow.document.close(); // Close the document to apply the changes
    printWindow.print(); // Trigger the print dialog
  };

  return (
    <div className="backDiv">
      <div className="mainCvDiv" ref={divRef}>
        <div className="leftCvDiv">
          <p className="firstNameCv">{firstName ? firstName : "John Doe"}</p>
          <p className="titleCv">
            {professionalTitle ? professionalTitle : "Business Manager"}
          </p>
          <p className="summaryCv">
            {summaryAbout
              ? summaryAbout
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis eligendi quos natus consectetur sint eum nobis dolore neque error reiciendis explicabo ex minima quae fugit, corrupti, temporibus soluta blanditiis."}
          </p>
          <p className="educationBackgroundCv">EDUCATION BACKGROUND</p>
          <div className="educationDiv">
            <div className="educationRowDiv">
              <img src="./public/circleImg.png" className="circleImg"></img>
              <p className="universityName">
                {universityName ? universityName : "University of London"}
              </p>
              <p className="universityYear">
                {startDate && endDate
                  ? `${startDate} - ${endDate}`
                  : "2024-12 - 2028-12"}
              </p>
            </div>
            <p className="degreeCv">{degree ? degree : "Ph.D in Philosophy"}</p>
            {award1 ? (
              <div className="awardsFirstDiv">
                <img
                  src="./public/circleImg.png"
                  className="circleImgSmall"
                  alt="award"
                />
                <p className="awardsParagraph">{award1}</p>
              </div>
            ) : null}
            {award2 ? (
              <div className="awardsSecondDiv">
                <img
                  src="./public/circleImg.png"
                  className="circleImgSmall"
                  alt="award"
                />
                <p className="awardsParagraph">{award2}</p>
              </div>
            ) : null}
          </div>
          <p className="workExperienceCv">WORK EXPERIENCE</p>
          <div className="workDiv">
            <div className="workRowDiv">
              <img src="./public/circleImg.png" className="circleImg"></img>
              <p className="workName">
                {positionName ? positionName : "Business Analyst"}
              </p>
              <p className="workYear">
                {startWork && endWork
                  ? `${startWork} - ${endWork}`
                  : "2024-12 - 2028-12"}
              </p>
            </div>
            <p className="degreeCv">
              {companyName ? companyName : "Company Inc."}
            </p>
            {respons1 ? (
              <div className="awardsFirstDiv">
                <img
                  src="./public/circleImg.png"
                  className="circleImgSmall"
                  alt="award"
                />
                <p className="awardsParagraph">{respons1}</p>
              </div>
            ) : null}
            {respons2 ? (
              <div className="awardsFirstDiv">
                <img
                  src="./public/circleImg.png"
                  className="circleImgSmall"
                  alt="award"
                />
                <p className="awardsParagraph">{respons2}</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="rightCvDiv">
          <div className="emailDiv">
            <img src="./public/email.png" className="iconImg"></img>
            <p className="emailAddress">
              {emailAddress ? emailAddress : "johndoe@example.com"}
            </p>
          </div>
          <div className="phoneDiv">
            <img src="./public/phone.png" className="iconImgPhone"></img>
            <p className="phoneNumber">
              {phoneNumber ? phoneNumber : "+111 222 3333"}
            </p>
          </div>
          <div className="locationDiv">
            <img src="./public/location.png" className="iconImgPhone"></img>
            <p className="location">
              {locationName ? locationName : "London, UK"}
            </p>
          </div>
          <div className="linkedinDiv">
            <img src="./public/linkedin.png" className="iconImgPhone"></img>
            <p className="linkedin">
              {linkedIn ? linkedIn : "linkedin.sample.com"}
            </p>
          </div>
          <p className="technicalSkillsCv">TECHNICAL SKILLS</p>
          <div className="technicalSkills1Div">
            <p className="technicalSkillName">
              {skillCategory ? skillCategory : "Design"}
            </p>
            <div className="skills1FirstDiv">
              <img
                src="./public/circleImg.png"
                className="circleImgSmall"
              ></img>
              <p className="skillsParagraph">{skill1 ? skill1 : "Photoshop"}</p>
            </div>
            <div className="skills1SecondDiv">
              <img
                src="./public/circleImg.png"
                className="circleImgSmall"
              ></img>
              <p className="skillsParagraph">
                {skill2 ? skill2 : "Illustrator"}
              </p>
            </div>
            <div className="skills1ThirdDiv">
              <img
                src="./public/circleImg.png"
                className="circleImgSmall"
              ></img>
              <p className="skillsParagraph">{skill3 ? skill3 : "Figma"}</p>
            </div>
          </div>
          <div className="technicalSkills2Div">
            <p className="technicalSkillName">Management</p>
            <div className="skills2FirstDiv">
              <img
                src="./public/circleImg.png"
                className="circleImgSmall"
              ></img>
              <p className="skillsParagraph">Time-management</p>
            </div>
            <div className="skills2SecondDiv">
              <img
                src="./public/circleImg.png"
                className="circleImgSmall"
              ></img>
              <p className="skillsParagraph">Communication</p>
            </div>
            <div className="skills2ThirdDiv">
              <img
                src="./public/circleImg.png"
                className="circleImgSmall"
              ></img>
              <p className="skillsParagraph">Pressure</p>
            </div>
          </div>
        </div>
      </div>
      <div className="buttonsDiv">
        <button className="downloadButton" onClick={handleDownload}>
          <img src="./public/downloadBtn.png" className="downloadImg"></img>
        </button>
        <button className="printButton" onClick={handlePrint}>
          <img src="./public/printBtn.png" className="printImg"></img>
        </button>
      </div>
    </div>
  );
}

export default CvDisplay;
