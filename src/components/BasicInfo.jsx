import React from "react";
import { useState } from "react";

function BasicInfo({
  onFirstNameChange,
  onProfessionalTitleChange,
  onSummaryAboutChange,
  onEmailAddressChange,
  onPhoneNumberChange,
  onLocationNameChange,
  onLinkedInChange,
  tempUniversityName,
  onTempUniversityNameChange,
  tempDegree,
  onTempDegreeChange,
  tempStartDate,
  onTempStartDateChange,
  tempEndDate,
  onTempEndDateChange,
  onUniversityDegreeDateChange,
  onAward1Change,
  onAward2Change,
  tempPositionName,
  onTempPositionNameChange,
  tempCompanyName,
  onTempCompanyNameChange,
  tempStartWork,
  onTempStartWorkChange,
  tempEndWork,
  onTempEndWorkChange,
  onPositionCompanyDateChange,
  onRespons1Change,
  onRespons2Change,
  onSkillCategoryChange,
  onSkill1Change,
  onSkill2Change,
  onSkill3Change,
}) {
  return (
    <div className="mainDiv">
      <div className="basicDiv">
        <h1 className="basicInfoHeader">Basic info</h1>
        <label className="formLabel">
          <span className="formLabel_title">Full name:</span>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form_input"
            placeholder="John Doe"
            onChange={onFirstNameChange}
          ></input>
        </label>
        <label className="formLabel">
          <span className="formLabel_title">Professional title:</span>
          <input
            type="text"
            name="professionalTitle"
            id="professionalTitle"
            onChange={onProfessionalTitleChange}
            className="form_input"
            placeholder="Business Manager"
          ></input>
        </label>
        <label className="formLabel_Summary">
          <span className="formLabel_title">Give a summary about yourself</span>
          <textarea
            type="text"
            name="summary"
            id="summaryAbout"
            onChange={onSummaryAboutChange}
            className="form_input_Summary"
            placeholder=""
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <h1 className="contactInfoHeader">Contact info</h1>
        <label className="formLabel">
          <span className="formLabel_title">Email:</span>
          <input
            type="email"
            name="email"
            id="email"
            onChange={onEmailAddressChange}
            className="form_input"
            placeholder="Business Manager"
          ></input>
        </label>
        <label className="formLabel">
          <span className="formLabel_title">Phone number:</span>
          <input
            id="phoneNumber"
            onChange={onPhoneNumberChange}
            type="text"
            name="phoneNumber"
            className="form_input"
            placeholder=""
          ></input>
        </label>
        <label className="formLabel">
          <span className="formLabel_title">Location:</span>
          <input
            id="location"
            type="text"
            name="location"
            className="form_input"
            placeholder="London, UK"
            onChange={onLocationNameChange}
          ></input>
        </label>
        <label className="formLabel">
          <span className="formLabel_title">Website:</span>
          <input
            id="linkedIn"
            onChange={onLinkedInChange}
            type="text"
            name="website"
            className="form_input"
            placeholder="linkedin.sample.com/johndoe"
          ></input>
        </label>
        <h1 className="educationInfoHeader">Education Background:</h1>
        <label className="formLabel" id="universityId">
          <span className="formLabel_title">
            University/Institution/Organization
          </span>
          <input
            value={tempUniversityName}
            type="text"
            name="university"
            className="form_input"
            placeholder="University of London"
            onChange={onTempUniversityNameChange}
          ></input>
        </label>
        <label className="formLabel" id="degreeId">
          <span className="formLabel_title">Degree/Program/Course:</span>
          <input
            type="text"
            name="degree"
            className="form_input"
            placeholder="Ph.D in Business"
            value={tempDegree}
            onChange={onTempDegreeChange}
          ></input>
        </label>
        <label className="formLabel">
          <span className="formLabel_title">Starting year:</span>
          <input
            type="month"
            name="startDate"
            className="form_input"
            value={tempStartDate}
            onChange={onTempStartDateChange}
          ></input>
        </label>
        <label className="formLabel">
          <span className="formLabel_title">Graduation year:</span>
          <input
            type="month"
            name="endDate"
            className="form_input"
            value={tempEndDate}
            onChange={onTempEndDateChange}
          ></input>
        </label>
        <label className="formLabel_AdditionalInfo">
          <span className="formLabel_title">
            Additional info (awards, courses, projects)
          </span>
          <input
            type="text"
            name="gpa"
            id="awardId"
            className="form_input_AdditionalInfo"
            placeholder="Awards: 1st Place, Competition; 2nd Place, Competition"
            onChange={onAward1Change}
          ></input>
          <input
            type="text"
            name="gpa"
            id="awardId"
            className="form_input_AdditionalInfo"
            placeholder="Organizations: Organization 1, Organization 2"
            onChange={onAward2Change}
          ></input>
        </label>
        <button
          type="button"
          className="educationInfo_button"
          onClick={onUniversityDegreeDateChange}
        >
          Submit education background
        </button>
        <h1 className="workInfoHeader">Work Experience</h1>
        <label className="formLabel">
          <span className="formLabel_title">Title/Position:</span>
          <input
            value={tempPositionName}
            type="text"
            name="position"
            className="form_input"
            placeholder="Business Analyst"
            onChange={onTempPositionNameChange}
          ></input>
        </label>
        <label className="formLabel">
          <span className="formLabel_title">Workplace/Company:</span>
          <input
            value={tempCompanyName}
            type="text"
            name="workplace"
            className="form_input"
            placeholder="Company Inc."
            onChange={onTempCompanyNameChange}
          ></input>
        </label>
        <label className="formLabel">
          <span className="formLabel_title">Starting year:</span>
          <input
            type="month"
            name="startDate"
            className="form_input"
            value={tempStartWork}
            onChange={onTempStartWorkChange}
          ></input>
        </label>
        <label className="formLabel">
          <span className="formLabel_title">End year:</span>
          <input
            type="month"
            name="endDate"
            className="form_input"
            value={tempEndWork}
            onChange={onTempEndWorkChange}
          ></input>
        </label>
        <label className="formLabel_AdditionalInfo">
          <span className="formLabel_title">
            List your job responsibilities
          </span>
          <input
            type="text"
            name="gpa"
            className="form_input_AdditionalInfo"
            placeholder="Job responsibility 1"
            onChange={onRespons1Change}
          ></input>
          <input
            type="text"
            name="gpa"
            className="form_input_AdditionalInfo"
            placeholder="Job responsibility 2"
            onChange={onRespons2Change}
          ></input>
        </label>
        <button
          type="button"
          className="workExperience_button"
          onClick={onPositionCompanyDateChange}
        >
          Submit work experience
        </button>
        <h1 className="technicalSkillsHeader">Technical Skills</h1>
        <p className="skillParagraph">
          Showcase the most relevant skills applicable to the job you're
          applying for
        </p>
        <label className="formLabel">
          <span className="formLabel_title">Add a category</span>
          <input
            type="text"
            name="skill"
            className="form_input"
            placeholder="Design"
            onChange={onSkillCategoryChange}
          ></input>
        </label>
        <label className="formLabel_ChoosenSkill">
          <span className="formLabel_title">Add a skill</span>
          <input
            type="text"
            name="skill"
            className="form_input"
            placeholder="Photoshop"
            onChange={onSkill1Change}
          ></input>
        </label>
        <label className="formLabel_ChoosenSkill">
          <span className="formLabel_title">Add a skill</span>
          <input
            type="text"
            name="skill"
            className="form_input"
            placeholder="Illustrator"
            onChange={onSkill2Change}
          ></input>
        </label>
        <label className="formLabel_ChoosenSkill">
          <span className="formLabel_title">Add a skill</span>
          <input
            type="text"
            name="skill"
            className="form_input"
            placeholder="Figma"
            onChange={onSkill3Change}
          ></input>
        </label>
        <button type="button" className="skill_button">
          Add another skill category
        </button>
        <h1 className="otherInfoHeader">Other Info</h1>
        <p className="otherInfoParagraph">
          Only fill this out if it's important to the job you're applying for or
          if your CV still has space in the preview
        </p>
        <label className="formLabel">
          <span className="formLabel_title">
            Add a category (Languages/Awards)
          </span>
          <input
            type="text"
            name="other"
            className="form_input"
            placeholder="Languages"
          ></input>
        </label>
        <button type="button" className="other_button">
          Submit info
        </button>
      </div>
    </div>
  );
}

export default BasicInfo;
