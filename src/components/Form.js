import React from "react";
import formscss from "../styles/Form.module.scss";
import Header from "../pages/header";
import PersonalDetails from "../pages/PersonalDetails";
import Summary from "../pages/summary";
import Employment from "../pages/employment";
import {
  addItems,
  deleteItems,
  updateItems,
} from "../redux/slices/employementSlice";
import {
  addItems as eduaddItems,
  deleteItems as eduDeleteitems,
  updateItems as eduUpdateItems,
} from "../redux/slices/educationSlice";
import {
  addItems as webaddItems,
  deleteItems as webdeleteitems,
  updateItems as webupdateItems,
} from "../redux/slices/websitesSlice";
import { useSelector } from "react-redux";
import Skills from "../pages/skills";

function Form() {
  const showdetails = useSelector((state) => state.employmentDetails.show);
  const showdetails1 = useSelector((state) => state.educationDetails.show);
  const showdetails2 = useSelector((state) => state.websiteDetails.show);

  const employmentState = useSelector((state) => state.employmentDetails.value);
  const educationState = useSelector((state) => state.educationDetails.value);
  const websiteState = useSelector((state) => state.websiteDetails.value);
  const labels = [
    ["First Name", "Last Name", "Email", "Phone", "country", "City"],
    [
      "Address",
      "Postal Code",
      "Id Proof",
      "Nationality",
      "Place of Birth",
      "Date of Birth",
    ],
  ];
  const employment = {
    title: "Employment History",
    desc: "Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).",
    addbtn: "+ Add Employement",
    form: {
      title: { name: "jobTitle", value: "Job Title" },
      subTitle: { name: "employer", value: "Employer" },
      start: { name: "start", value: "Start Date", type: "date" },
      end: { name: "end", value: "End Date", type: "date" },
      city: { name: "city", value: "City" },
      desc: { name: "decs", value: "Description", type: "textarea" },
    },
    redux: {
      state: employmentState,
      show: showdetails,
      actions: {
        addItems,
        deleteItems,
        updateItems,
      },
    },
  };
  const education = {
    title: "Education",
    desc: "A varied education on your resume sums up the value that your learnings and background will bring to job.",
    addbtn: "+ Add Education",
    form: {
      title: { name: "School", value: "School" },
      subTitle: { name: "Degree", value: "Degree" },
      start: { name: "start", value: "Start Date", type: "date" },
      end: { name: "end", value: "End Date", type: "date" },
      city: { name: "city", value: "City" },
      desc: { name: "decs", value: "Description", type: "textarea" },
    },
    redux: {
      state: educationState,
      show: showdetails1,
      actions: {
        addItems: eduaddItems,
        deleteItems: eduDeleteitems,
        updateItems: eduUpdateItems,
      },
    },
  };
  const websites = {
    title: "Website & Social Links",
    desc: "You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website",
    addbtn: "+ Add Links",
    form: {
      title: { name: "Label", value: "Label" },
      subTitle: { name: "Link", value: "Link" },
    },
    redux: {
      state: websiteState,
      show: showdetails2,
      actions: {
        addItems: webaddItems,
        deleteItems: webdeleteitems,
        updateItems: webupdateItems,
      },
    },
  };
  return (
    <div className={formscss.main}>
      <Header />
      <PersonalDetails data={labels} />
      <Summary />
      <Employment data={employment} />
      <Employment data={education} />
      <Employment data={websites} />
      <Skills />
    </div>
  );
}

export default Form;
