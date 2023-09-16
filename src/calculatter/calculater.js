import React, { useState } from "react";

const Calculater = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleValue = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const handleBack = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div>
      <div className="bg-gradient0 flex items-center justify-center h-screen">
        <div className="w-[300px] bg-black p-3 rounded-xl">
          <form className="m-3 flex justify-center">
            <input
              value={result ? result : input}
              type="text"
              className="outline-none text-white font-semibold text-2xl text-right border-none bg-red-950 rounded-xl h-20 w-96"
            />
          </form>
          <div className="w-full">
            <div className="flex justify-evenly">
              <button
                type="button"
                className="btn btnsign"
                onClick={() => handleValue("*")}
              >
                *
              </button>
              <button
                type="button"
                className="btn btnsign"
                onClick={() => handleValue("/")}
              >
                /
              </button>
              <button
                type="button"
                className="btn btnsign"
                onClick={() => handleValue("-")}
              >
                -
              </button>
              <button
                type="button"
                className="btn btnsign"
                onClick={() => handleValue("+")}
              >
                +
              </button>
            </div>
            <div className="flex justify-evenly">
              <button
                type="button"
                className="btn"
                onClick={() => handleValue("9")}
              >
                9
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => handleValue("8")}
              >
                8
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => handleValue("7")}
              >
                7
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => handleValue("6")}
              >
                6
              </button>
            </div>
            <div className="flex justify-evenly">
              <button
                type="button"
                className="btn"
                onClick={() => handleValue("5")}
              >
                5
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => handleValue("4")}
              >
                4
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => handleValue("3")}
              >
                3
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => handleValue("2")}
              >
                2
              </button>
            </div>
            <div className="flex justify-evenly">
              <button
                type="button"
                className="btn"
                onClick={() => handleValue("1")}
              >
                1
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => handleValue("0")}
              >
                0
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => handleValue(".")}
              >
                .
              </button>
              <button
                type="button"
                className="bg-green-600"
                onClick={() => handleCalculate("=")}
              >
                =
              </button>
            </div>
            <div className="flex ml-3 justify-start">
              <button
                type="button"
                className="bg-red-500"
                onClick={() => handleClear()}
              >
                C
              </button>
              <button
                type="button"
                className="bg-red-500"
                onClick={() => handleBack()}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculater;
