import React, { useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import Lottie from "lottie-web";
import education from "./education.json";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
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

  return (
    <div className="home">
      <div className="bg-[#ffffffe9] w-full h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <h3 className="text-2xl md:text-5xl font-semibold">
            Fully Automated Exam Proctoring
          </h3>

          <div className="flex items-center mt-10">
            <Link
              to="/test"
              className="btn bg-blue-500 flex items-center justify-start"
            >
              Test now <FaAngleRight className="ml-2" />
            </Link>
            <Link
              to="/create-test"
              className="btn bg-[#8E24AA] hover:bg-[#ae28d3] flex items-center justify-start "
            >
              Create Test <FaAngleRight className="ml-2" />
            </Link>
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
