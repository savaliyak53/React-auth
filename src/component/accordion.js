import React, { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient0 h-screen">
      <h1 className="text-center text-2xl relative left-1/2 top-2 font-semibold w-36 rounded-xl bg-slate-500 text-white py-2">
        Accordion
      </h1>
      <div
        onClick={() => setOpen(!open)}
        className="bg-orange-500 w-fit py-2 px-1 mx-2 rounded-sm"
      >
        Accordion
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } w-96 mx-2 bg-red-600 text-white mt-2 p-3 rounded-xl shadow-2xl shadow-black`}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste et
        distinctio non nobis consequuntur omnis, laboriosam totam laudantium
        sunt, provident eum labore! Quidem provident maiores expedita aliquid,
        quibusdam ipsum libero.
      </div>
    </div>
  );
};

export default Accordion;
