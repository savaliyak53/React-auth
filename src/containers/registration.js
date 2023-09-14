import React, { useState } from "react";

const Registration = () => {
  const [data, setData] = useState([
    {
      color: "purple",
      type: "minivan",
      registration: new Date("2012-02-03"),
      capacity: 7,
    },
    {
      color: "blue",
      type: "maxivan",
      registration: new Date("2012-02-03"),
      capacity: 7,
    },
  ]);

  const handleData = () => {
    setData((current) => {
      current.map((curr) => console.log(curr, "current"));
    });
  };

  return (
    <button onClick={handleData}>
      <div>Registration</div>
    </button>
  );
};

export default Registration;
