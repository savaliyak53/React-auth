import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const naviga = () => {
    navigate("../about?id=53&&name=projectk&&company=hp");
  };

  return (
    <>
      <div>contact</div>
      <button onClick={naviga}>onClick</button>
      <br />
      <button onClick={() => navigate(-1)}>back on page</button>
    </>
  );
};

export default Contact;
