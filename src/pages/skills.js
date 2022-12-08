import React, { useState } from "react";
import { Switch } from "antd";
import Skillsbtn from "./skillsbtn";
import skillstyle from "../styles/Skills.module.scss";
import { Collapse } from "antd";
import { Button } from "antd";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addItems, deleteItems, updateItems } from "../redux/slices/skillSlice";

const { Panel } = Collapse;

function Skills() {
  const [checkeddata, setcheckedData] = useState();
  const dispatch = useDispatch();
  const skillState = useSelector((state) => state.skillsDetails.value);
  const showdetails = useSelector((state) => state.skillsDetails.show);
  const skill = {
    title: "Skills",
    desc: "Choose 5 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system.",
    addbtn: "+ Add Skills",
    form: {
      title: { name: "Skill", value: "Skill" },
      subTitle: { name: "Levelexperts", value: "Level - Expert" },
    },
  };
  const onChange = (checked, event) => {
    // console.log(`switch to ${checked}`);
    setcheckedData(checked);
  };

  return (
    <div className={skillstyle.main}>
      <div className={skillstyle.container}>
        <h1>Skills</h1>
        <p>
          Choose 5 of the most important skills to show your talents! Make sure
          they match the keywords of the job listing if applying via an online
          system.
        </p>
        <div>
          <label>
            {" "}
            <div>
              <Switch defaultChecked onChange={onChange} />
            </div>
            Dont show experence level
          </label>
          <div className={skillstyle.btndiv}>
            <Skillsbtn name="Javascript" />
            <Skillsbtn name="Html" />
            <Skillsbtn name="css" />
            <Skillsbtn name="Bootstrap" />
            <Skillsbtn name="C++" />
            <Skillsbtn name="Java" />
          </div>
        </div>

        <div className={skillstyle.acords}>
          {showdetails && (
            <div className={skillstyle.acord}>
              {skillState.map((e, index) => {
                const arr = [];
                for (const keys in skill.form) {
                  arr.push(
                    <label className={skillstyle.labels}>
                      {skill.form[keys].value}

                      <Input
                        className={skillstyle.inputt}
                        id={skill.form[keys].name}
                        name={skill.form[keys].name}
                        placeholder={`Enter your ${skill.form[keys].value}`}
                        onChange={(emp) => {
                          dispatch(
                            updateItems({
                              name: emp.target.name,
                              value: emp.target.value,
                              id: e.id,
                            })
                          );
                        }}
                        disabled={
                          skill.form[keys].name === "Levelexperts" &&
                          checkeddata
                            ? true
                            : false
                        }
                      />
                    </label>
                  );
                }
                return (
                  <div className={skillstyle.accord}>
                    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                      <Panel header={skillState[index].Skill} key="1">
                        <div className={skillstyle.innercontent}>
                          {arr.map((e) => e)}
                        </div>
                      </Panel>
                    </Collapse>
                  </div>
                );
              })}
            </div>
          )}

          <div>
            <Button
              type="text"
              style={{ color: "rgb(79, 152, 181)", fontWeight: "bold" }}
              onClick={() =>
                dispatch(
                  addItems({
                    showit: true,
                  })
                )
              }
            >
              {" "}
              + Add More Skills
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
