import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const naviga = () => {
    navigate("/about?id=53&&name=projectk");
  };
  return (
    <>
      <div>contact</div>
      <button onClick={naviga}>onClick</button>
    </>
  );
};

export default Contact;
