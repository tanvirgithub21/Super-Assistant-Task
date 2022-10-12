import React, { useContext, useState } from "react";
import { BiMessageAltAdd } from "react-icons/bi";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { questionStore } from "../../State/StateProvider";

const CreateTest = () => {
  const { questionData, onSubmit } = useContext(questionStore);

  const { register, handleSubmit, reset } = useForm();

  const [questionType, setQuestionType] = useState("mcq");

  const uplodeQues = () => {
    onSubmit();
    reset();
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-[50rem] w-full mx-auto my-8">
        <h1 className="text-lg md:text-2xl font-semibold px-2 border-b-2 border-gray-400">
          Create Test
        </h1>
        {/* test Q */}
        <form onSubmit={handleSubmit(uplodeQues)}>
          <div className="box-shadow-light dark:box-shadow-dark p-2 my-4 min-h-[20rem]">
            <div>
              {/* create test header  */}
              <div className="flex justify-between items-center">
                {/* question NO */}
                <span>Question No: {questionData.length + 1}</span>

                {/* select question type */}
                <div>
                  <select
                    {...register("question_type")}
                    onChange={(e) => setQuestionType(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-32 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="mcq">MCQ</option>
                    <option value="short_text">Short Text</option>
                  </select>
                </div>

                {/* question point */}
                <div>
                  <input
                    {...register("point")}
                    type="number"
                    id="point"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Point"
                    required
                  />
                </div>
              </div>

              {/* create test body  */}
              <div className="w-full">
                <input
                  {...register("question_title")}
                  type="text"
                  name="question_title"
                  id="question_title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-5"
                  placeholder="Type your question title "
                  required
                />

                {/* media file UpLode  */}
                <div className="mt-5">
                  <label
                    for="media"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2 cursor-pointer"
                  >
                    Media
                  </label>
                  <input
                    {...register("media")}
                    type="file"
                    name="media"
                    id="media"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
                  />
                </div>

                {/* mcq option 1-4 */}
                {questionType === "mcq" && (
                  <div
                    className={`grid grid-cols-2 gap-4 mt-5 ${
                      questionType !== "mcq" && "hidden"
                    }`}
                  >
                    <input
                      {...register("mcq_1")}
                      type="text"
                      id="mcq_1"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Option 1"
                      required
                    />
                    <input
                      {...register("mcq_2")}
                      type="text"
                      id="mcq_2"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Option 2"
                      required
                    />
                    <input
                      {...register("mcq_3")}
                      type="text"
                      id="mcq_3"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Option 3"
                    />
                    <input
                      {...register("mcq_4")}
                      type="text"
                      id="mcq_4"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Option 4"
                    />
                  </div>
                )}

                {/* min max characters */}
                {questionType === "short_text" && (
                  <div
                    className={`grid grid-cols-2 gap-4 mt-5 ${
                      questionType !== "short_text" && "hidden"
                    }`}
                  >
                    <input
                      {...register("min_characters")}
                      type="number"
                      id="min_characters"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Min characters"
                      required
                    />
                    <input
                      {...register("max_characters")}
                      type="number"
                      id="max_characters"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Max characters"
                      required
                    />
                  </div>
                )}
              </div>

              <button onClick={() => reset()} className="btn bg-red-400 mt-5 ">
                Reset
              </button>
            </div>
          </div>

          {/* add and saved  */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn bg-gray-400 hover:bg-gray-500 uppercase flex items-center"
            >
              <BiMessageAltAdd className="mr-1 text-xl" /> Add New
            </button>
            <button
              type="submit"
              className="btn bg-green-600 hover:bg-green-700 uppercase"
            >
              Saved
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTest;
