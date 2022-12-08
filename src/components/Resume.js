import React from "react";
import resumescss from "../styles/Resume.module.scss";
import { useSelector } from "react-redux";

function Resume() {
  const permanetState = useSelector((state) => state.permantDetails.value);
  const employmentState = useSelector((state) => state.employmentDetails.value);
  const educationState = useSelector((state) => state.educationDetails.value);
  const websiteState = useSelector((state) => state.websiteDetails.value);
  const SkillState = useSelector((state) => state.skillsDetails.value);
  return (
    <div className={resumescss.main}>
      <div className={resumescss.resume}>
        <div className={resumescss.imagediv}>
          <img
            className={resumescss.profilepic}
            src={permanetState.cloudinary}
            alt="profile"
          />
        </div>
        <div className={resumescss.fullname}>
          <div className={resumescss.firstname}>{permanetState.FirstName}</div>
          <div className={resumescss.lastname}>{permanetState.LastName}</div>
        </div>
        <div className={resumescss.jobtitle}>
          jobtitle : {permanetState.jobtitle}
        </div>
        <div className={resumescss.Email}>Email: {permanetState.Email}</div>
        <div className={resumescss.Phone}>Phone : {permanetState.Phone}</div>
        <div className={resumescss.Country}>
          Country : {permanetState.Country}
        </div>
        <div className={resumescss.City}>City : {permanetState.City}</div>
        <div className={resumescss.Address}>
          Address : {permanetState.Address}
        </div>
        <div className={resumescss.PostalCode}>
          PostalCode : {permanetState.PostalCode}
        </div>
        <div className={resumescss.IdProof}>
          ID Proof : {permanetState.IdProof}
        </div>
        <div className={resumescss.Nationality}>
          Nationality : {permanetState.Nationality}
        </div>
        <div className={resumescss.PlaceofBirth}>
          Place of Birth : {permanetState.PlaceofBirth}
        </div>
        <div className={resumescss.DateofBirth}>
          Date of Birth : {permanetState.DateofBirth}
        </div>
        <div className={resumescss.summary}>
          {" "}
          Summary : {permanetState.summary}
        </div>
        {employmentState.map((emp) => (
          <div>
            <div>jobtitle : {emp.jobTitle}</div>
            <div>Employer : {emp.employer}</div>
            <div>start : {emp.start}</div>
            <div>end : {emp.end}</div>
            <div>city : {emp.city}</div>
            <div>desc : {emp.decs}</div>
          </div>
        ))}

        {educationState.map((emp) => (
          <div>
            <div>jobtitle : {emp.School}</div>
            <div>Employer : {emp.Degree}</div>
            <div>start : {emp.start}</div>
            <div>end : {emp.end}</div>
            <div>city : {emp.city}</div>
            <div>desc : {emp.decs}</div>
          </div>
        ))}
        <div>
          {websiteState.map((emp) => (
            <div>
              <div>label : {emp.Label}</div>
              <div>Link : {emp.Link}</div>
            </div>
          ))}
        </div>
        <div>
          {SkillState.map((emp) => (
            <div>
              <div>SKILL : {emp.Skill}</div>
              <div>Levelexperts : {emp.Levelexperts}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
