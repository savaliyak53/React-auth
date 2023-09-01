import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");
  const name = searchParam.get("name");
  return (
    <div className="mt-10 font-extrabold text-3xl">
      about {id} {name}
    </div>
  );
};

export default About;
