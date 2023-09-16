import React, { useState } from "react";

const MessageBox = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("Hello");

  return (
    <div className="flex justify-center items-center bg-gradient0 h-screen">
      <div className="w-[500px] gap-y-5 flex flex-col items-center h-[250px] bg-slate-300 rounded-2xl shadow-xl shadow-black">
        <div className="mt-5 text-2xl">A Massage You Would Like To Pass</div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className="w-[80%] bg-slate-300 border border-yellow-600 h-10 rounded-lg outline-none p-2"
        />
        <button
          onClick={() => setResult(input)}
          className="bg-yellow-600 text-3xl rounded-xl py-2 px-3 "
        >
          Summit
        </button>
        <p className="text-xl">Last Massage Delivered!</p>
        <p className="text-2xl text-green-700">{result}</p>
      </div>
    </div>
  );
};

export default MessageBox;
