import React from "react";
import smstyle from "../styles/summary.module.scss";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import { additems } from "../redux/slices/personalSlice";
const { TextArea } = Input;

function Summary() {
  const dispatch = useDispatch();
  return (
    <div className={smstyle.main}>
      <div className={smstyle.container}>
        <h1>Professional Summary</h1>
        <p>
          Write 2-4 short & energetic sentences to interest the reader! Mention
          your role, experience & most importantly - your biggest achievements,
          best qualities and skills.
        </p>
        <div>
          <TextArea
            className={smstyle.textarea}
            rows={8}
            placeholder="Enter the summary here"
            name="summary"
            onChange={(e) =>
              dispatch(
                additems({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Summary;
