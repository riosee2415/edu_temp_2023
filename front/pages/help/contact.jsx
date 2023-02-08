import React, { useState } from "react";
import { Input } from "antd";

const Contact = () => {
  const [text, setText] = useState("");

  const inputChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <Input type="text" value={text} onChange={inputChangeHandler} />
    </div>
  );
};

export default Contact;
