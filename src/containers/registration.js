import React from "react";
import Button1 from "../component/Button1";
import Button2 from "../component/Button2";

const Registration = () => {
  return (
    <>
      <div className="bg-gradient0 h-screen flex justify-center items-center">
        <div className="rounded-lg shadow-[-1.95px_1.95px_16px_3px_black] bg-black/10 hover:bg-black/5 w-1/3 h-3/4 flex justify-center items-center">
          <Button1 />
          <Button2 />
          <br />
        </div>
      </div>
    </>
  );
};

export default Registration;
