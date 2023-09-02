import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const id = searchParam.get("id");
  const name = searchParam.get("name");
  const com = searchParam.get("company");

  const showData = searchParam.get("setparam");

  return (
    <div className="mt-10 font-extrabold text-3xl">
      about {id} {name} {com}
      <br />{" "}
      <button onClick={() => setSearchParam({ setparam: "halo aavi gyo" })}>
        Set Param
      </button>
      <br />
      <br />
      <div>{!!showData ? showData : "Click Set Param"}</div>
    </div>
  );
};

export default About;
