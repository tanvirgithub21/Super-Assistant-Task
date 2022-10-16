import React, { useContext, useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import Lottie from "lottie-web";
import education from "./education.json";
import { Link } from "react-router-dom";
import "./Home.css";
import { questionStore } from "../../State/StateProvider";

const Home = () => {
  const { userDataDB, user } = useContext(questionStore);
  const userType = userDataDB?.userType;

  const anime = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: education,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
  }, []);

  console.log("user hit", user);

  return (
    <div className="home">
      <div className="bg-[#ffffffe9] w-full h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <h3 className="text-2xl md:text-5xl font-semibold">
            Fully Automated Exam Proctoring
          </h3>

          <div className="flex items-center mt-10">
            {!user && (
              <Link
                to="/login"
                className="btn bg-blue-500 flex items-center justify-start"
              >
                Login Now <FaAngleRight className="ml-2" />
              </Link>
            )}

            {userType === "student" && (
              <Link
                to="/test"
                className="btn bg-blue-500 flex items-center justify-start"
              >
                Test now <FaAngleRight className="ml-2" />
              </Link>
            )}

            {userType === "teacher" && (
              <Link
                to="/create-test"
                className="btn bg-[#8E24AA] hover:bg-[#ae28d3] flex items-center justify-start "
              >
                Create Test <FaAngleRight className="ml-2" />
              </Link>
            )}
          </div>

          {/* lottie icon  */}
          <div className="flex justify-center items-center">
            <div className="w-fit mx-auto">
              <div
                className="overflow-hidden"
                style={{
                  height: "350px",
                  width: "100%",
                  overflow: "hidden",
                  outline: "none",
                  margin: "0 auto",
                }}
                ref={anime}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
