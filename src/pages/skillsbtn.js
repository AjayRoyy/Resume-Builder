import React, { useState } from "react";
import { Button } from "antd";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";
import skillstyle from "../styles/Skills.module.scss";

function Skillsbtn({ name }) {
  const [state, setState] = useState("1");
  const ticked = () => {
    if (state) {
      return setState("");
    } else {
      return setState("1");
    }
  };

  return (
    <div className={skillstyle.btndiv}>
      {" "}
      <Button
        type="primary"
        icon={state ? <PlusOutlined /> : <CheckOutlined />}
        onClick={ticked}
      >
        {name}
      </Button>
    </div>
  );
}

export default Skillsbtn;
