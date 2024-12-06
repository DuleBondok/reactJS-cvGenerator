import React from "react";
import HeaderInfo from "./components/HeaderInfo";
import BasicInfo from "./components/BasicInfo";
import CvDisplay from "./components/CvDisplay";
import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [professionalTitle, setProfessionalTitle] = useState("");
  const [summaryAbout, setSummaryAbout] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [locationName, setLocationName] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [tempUniversityName, setTempUniversityName] = useState("");
  const [degree, setDegree] = useState("");
  const [tempDegree, setTempDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tempStartDate, setTempStartDate] = useState("");
  const [tempEndDate, setTempEndDate] = useState("");
  const [award1, setAward1] = useState("");
  const [award2, setAward2] = useState("");
  const [positionName, setPositionName] = useState("");
  const [tempPositionName, setTempPositionName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [tempCompanyName, setTempCompanyName] = useState("");
  const [startWork, setStartWork] = useState("");
  const [endWork, setEndWork] = useState("");
  const [tempStartWork, setTempStartWork] = useState("");
  const [tempEndWork, setTempEndWork] = useState("");
  const [respons1, setRespons1] = useState("");
  const [respons2, setRespons2] = useState("");
  const [skillCategory, setSkillCategory] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleProfessionalTitleChange = (event) => {
    setProfessionalTitle(event.target.value);
  };

  const handleSummaryAboutChange = (event) => {
    setSummaryAbout(event.target.value);
  };

  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleLocationNameChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleLinkedInChange = (event) => {
    setLinkedIn(event.target.value);
  };

  const handleTempUniversityNameChange = (event) =>
    setTempUniversityName(event.target.value);

  const handleTempDegreeChange = (event) => setTempDegree(event.target.value);

  const handleTempStartDateChange = (event) =>
    setTempStartDate(event.target.value);

  const handleTempEndDateChange = (event) => setTempEndDate(event.target.value);

  const handleUniversityDegreeDateChange = () => {
    setUniversityName(tempUniversityName); // Set universityName with temp value
    setDegree(tempDegree); // Set degree with temp value
    setStartDate(tempStartDate); // Set startDate with temp value
    setEndDate(tempEndDate); // Set endDate with temp value
  };

  const handleAward1Change = (event) => {
    setAward1(event.target.value);
  };

  const handleAward2Change = (event) => {
    setAward2(event.target.value);
  };

  const handleRespons1Change = (event) => {
    setRespons1(event.target.value);
  };

  const handleRespons2Change = (event) => {
    setRespons2(event.target.value);
  };

  const handleTempPositionNameChange = (event) =>
    setTempPositionName(event.target.value);

  const handleTempCompanyNameChange = (event) =>
    setTempCompanyName(event.target.value);

  const handlePositionCompanyDateChange = () => {
    setPositionName(tempPositionName); // Set universityName with temp value
    setCompanyName(tempCompanyName);
    setStartWork(tempStartWork);
    setEndWork(tempEndWork);
  };

  const handleTempStartWorkChange = (event) =>
    setTempStartWork(event.target.value);

  const handleTempEndWorkChange = (event) => setTempEndWork(event.target.value);

  const handleSkillCategoryChange = (event) => {
    setSkillCategory(event.target.value);
  };

  const handleSkill1Change = (event) => {
    setSkill1(event.target.value);
  };
  const handleSkill2Change = (event) => {
    setSkill2(event.target.value);
  };
  const handleSkill3Change = (event) => {
    setSkill3(event.target.value);
  };

  return (
    <>
      <HeaderInfo />
      <BasicInfo
        onFirstNameChange={handleFirstNameChange}
        onProfessionalTitleChange={handleProfessionalTitleChange}
        onSummaryAboutChange={handleSummaryAboutChange}
        onEmailAddressChange={handleEmailAddressChange}
        onPhoneNumberChange={handlePhoneNumberChange}
        onLocationNameChange={handleLocationNameChange}
        onLinkedInChange={handleLinkedInChange}
        tempUniversityName={tempUniversityName} // Pass temp university name
        onTempUniversityNameChange={handleTempUniversityNameChange} // Handle temporary university name input
        tempDegree={tempDegree} // Pass temp degree value
        onTempDegreeChange={handleTempDegreeChange} // Handle degree input
        tempStartDate={tempStartDate} // Pass temp start date value
        onTempStartDateChange={handleTempStartDateChange} // Handle start date input
        tempEndDate={tempEndDate} // Pass temp end date value
        onTempEndDateChange={handleTempEndDateChange} // Handle end date input
        onUniversityDegreeDateChange={handleUniversityDegreeDateChange} // Button to update university, degree, start and end date
        onAward1Change={handleAward1Change}
        onAward2Change={handleAward2Change}
        tempPositionName={tempPositionName} // Pass temp university name
        onTempPositionNameChange={handleTempPositionNameChange} // Handle temporary university name input
        tempCompanyName={tempCompanyName} // Pass temp degree value
        onTempCompanyNameChange={handleTempCompanyNameChange} // Handle degree input
        tempStartWork={tempStartWork}
        onTempStartWorkChange={handleTempStartWorkChange}
        tempEndWork={tempEndWork}
        onTempEndWorkChange={handleTempEndWorkChange}
        onPositionCompanyDateChange={handlePositionCompanyDateChange}
        onRespons1Change={handleRespons1Change}
        onRespons2Change={handleRespons2Change}
        onSkillCategoryChange={handleSkillCategoryChange}
        onSkill1Change={handleSkill1Change}
        onSkill2Change={handleSkill2Change}
        onSkill3Change={handleSkill3Change}
      />
      <CvDisplay
        firstName={firstName}
        professionalTitle={professionalTitle}
        summaryAbout={summaryAbout}
        emailAddress={emailAddress}
        phoneNumber={phoneNumber}
        locationName={locationName}
        linkedIn={linkedIn}
        universityName={universityName}
        degree={degree} // Pass degree
        startDate={startDate} // Pass start date
        endDate={endDate} // Pass end date
        award1={award1}
        award2={award2}
        positionName={positionName}
        companyName={companyName}
        startWork={startWork}
        endWork={endWork}
        respons1={respons1}
        respons2={respons2}
        skillCategory={skillCategory}
        skill1={skill1}
        skill2={skill2}
        skill3={skill3}
      />
    </>
  );
}
export default App;
