import React from "react";
import pdstyle from "../styles/PersonalDetails.module.scss";
import { Input } from "antd";
import { Collapse } from "antd";
import { useDispatch } from "react-redux";
import { additems } from "../redux/slices/personalSlice";
import axios from "axios";

const { Panel } = Collapse;
function PersonalDetails({ data }) {
  const dispatch = useDispatch();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Ajay Roy");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dsr9ifmyh/upload",
        formData
      );
      dispatch(
        additems({
          name: "cloudinary",
          value: res.data.url,
        })
      );
      console.log(res.data.url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={pdstyle.main}>
      <div className={pdstyle.details}>
        <h1>Personal Details</h1>
        <div className={pdstyle.contentDetails}>
          <label htmlFor="jobtitle">
            Wanted Job Title
            <Input
              className={pdstyle.inputt}
              id="jobtitle"
              name="jobtitle"
              placeholder="Basic usage"
              onChange={(e) =>
                dispatch(
                  additems({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
            />
          </label>
          <label htmlFor="jobtitle">
            choose your photo
            <Input
              className={pdstyle.inputt}
              id="jobtitle"
              name="clodinary"
              placeholder="Basic usage"
              type="file"
              onChange={(e) => uploadImage(e)}
            />
          </label>
          {data[0].map((labels) => (
            <label htmlFor="jobtitle">
              {labels}
              <Input
                className={pdstyle.inputt}
                id="jobtitle"
                name={labels.split(" ").join("")}
                placeholder="Basic usage"
                onChange={(e) =>
                  dispatch(
                    additems({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
              />
            </label>
          ))}
          <div className={pdstyle.showmoreitems}>
            <Collapse ghost>
              <Panel
                header="Edit Additional Details"
                style={{ color: "#7FE9DE", fontWeight: "bold" }}
                key="1"
              >
                <div className={pdstyle.moredetails}>
                  {data[1].map((labels) => (
                    <label htmlFor="jobtitle">
                      {labels}
                      <Input
                        className={pdstyle.inputt}
                        id="jobtitle"
                        name={labels.split(" ").join("")}
                        placeholder="Basic usage"
                        onChange={(e) =>
                          dispatch(
                            additems({
                              name: e.target.name,
                              value: e.target.value,
                            })
                          )
                        }
                      />
                    </label>
                  ))}
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
