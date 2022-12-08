import React from "react";
import emstyles from "../styles/Employement.module.scss";
import { Button } from "antd";
import { Collapse } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Input } from "antd";

const { TextArea } = Input;

const { Panel } = Collapse;

function Employment({ data }) {
  const dispatch = useDispatch();
  const { addItems, deleteItems, updateItems } = data.redux.actions;

  return (
    <div className={emstyles.main}>
      <div className={emstyles.container}>
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        {data.redux.show &&
          data.redux.state.map((e, i) => {
            const arr = [];
            for (const keys in data.form) {
              arr.push(
                <label htmlFor={data.form[keys].name}>
                  {data.form[keys].value}
                  {data.form[keys].type === "textarea" ? (
                    <TextArea
                      rows={4}
                      className={emstyles.inputt}
                      id={data.form[keys].name}
                      name={data.form[keys].name}
                      placeholder={data.form[keys].value}
                      onChange={(emp) => {
                        dispatch(
                          updateItems({
                            name: emp.target.name,
                            value: emp.target.value,
                            id: e.id,
                          })
                        );
                      }}
                    />
                  ) : (
                    <Input
                      className={emstyles.inputt}
                      id={data.form[keys].name}
                      name={data.form[keys].name}
                      placeholder={data.form[keys].value}
                      value={e[keys]}
                      type={
                        data.form[keys].type ? data.form[keys].type : "text"
                      }
                      onChange={(emp) => {
                        dispatch(
                          updateItems({
                            name: emp.target.name,
                            value: emp.target.value,
                            id: e.id,
                          })
                        );
                      }}
                    />
                  )}
                </label>
              );
            }

            return (
              <div className={emstyles.accord}>
                <Collapse accordion style={{ width: "100%" }}>
                  <Panel header={""} key="1">
                    <div className={emstyles.innercontent}>
                      {arr.map((e) => e)}
                    </div>
                  </Panel>
                </Collapse>
                <DeleteOutlined
                  onClick={() =>
                    dispatch(
                      deleteItems({
                        ids: e.id,
                      })
                    )
                  }
                  style={{ color: "rgb(79, 152, 181)" }}
                />
              </div>
            );
          })}

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
            {data.addbtn}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Employment;
