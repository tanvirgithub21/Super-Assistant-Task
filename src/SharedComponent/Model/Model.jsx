import React from "react";

const Model = ({ handleSingIn, openModel, setOpenModel }) => {
  return (
    <div className="min-w-full min-h-full bg-[#0000009f] absolute top-0 left-0 flex justify-center items-center">
      <div className="max-w-[20rem] w-full bg-[#ffffff] border-2 rounded-md shadow-md p-3 ">
        <h3 className="text-lg md:text-xl text-gray-700 pt-[3rem] pb-[3rem] text-center font-semibold">
          Choose one of the options below
        </h3>

        <div className="mb-12 flex justify-center items-center">
          <button
            onClick={() => {
              setOpenModel(false);
              handleSingIn("student");
            }}
            className="btn bg-sky-500 hover:bg-sky-600"
          >
            Student
          </button>
          <button
            onClick={() => {
              setOpenModel(false);
              handleSingIn("teacher");
            }}
            className="btn bg-sky-500 hover:bg-sky-600"
          >
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
