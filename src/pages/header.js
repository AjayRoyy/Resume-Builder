import React from "react";
import headstyle from "../styles/header.module.scss";
import { Select } from "antd";
import { Progress } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const ProgressBar = () => {
  return (
    <div className={headstyle.progressdiv}>
      <Progress className={headstyle.progress} percent={50} status="active" />
    </div>
  );
};

function Header() {
  return (
    <div className={headstyle.main}>
      <div className={headstyle.title_div}>
        <h1 contentEditable="true" className={headstyle.title}>
          Title
        </h1>
      </div>
      <Select
        defaultValue="English"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: "English",
            label: "English",
          },
          {
            value: "Germany",
            label: "Germany",
          },
          {
            value: "Telugu",
            label: "Telugu",
          },
        ]}
      />

      <ProgressBar />
    </div>
  );
}

export default Header;
