import React, { useState, useEffect } from "react";

const Animatedpage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="">
      <div
        className={`bg-orange-600 h-screen relative ${
          showContent ? "" : "opacity-0"
        }`}
      ></div>
      <div
        className={`bg-black h-screen absolute - transition duration-1000 ${
          showContent ? "-translate-y-[100vh]" : ""
        }`}
      >
        <div className="flex justify-between mx-20 py-7">
          <div className="text-white font-semibold">
            new <span className="text-2xl italic">profit</span>
          </div>
          <div className="text-white font-semibold">
            <div className="text-2xl font-semibold">samuel</div>
            <div className="text-sm">Already A Member</div>
          </div>
        </div>
        <div className="flex justify-between mx-20">
          <div className="text-white text-8xl">
            <h1>
              Product Designer, <br />
              Maker,brand builder , <br />
              and type lover.
            </h1>
          </div>
          <div className="mt-8">
            <img
              src={`${process.env.PUBLIC_URL}/image/istoc.jpg`}
              alt="img"
              className="w-[650px] h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animatedpage;
