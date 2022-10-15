import React from "react";
import { Link } from "react-router-dom";
import cup from "../../images/cup.gif";

const ShowScore = ({ totalPoint, score, setShowScore, sourceUpdateDB }) => {
  sourceUpdateDB(totalPoint, score);
  return (
    <div>
      <div>
        <img className="w-auto h-32 md:h-52 mx-auto" src={cup} alt="cup" />
      </div>
      <h3 className="text-xl md:text-3xl text-gray-700 dark:text-gray-500 text-center  font-semibold mb-10">
        You scored {score} out of {totalPoint}
      </h3>
      <div className="flex justify-center">
        <div
          onClick={() => setShowScore(false)}
          className="text-center btn bg-cyan-600 hover:bg-cyan-700"
        >
          <Link to="/home">back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default ShowScore;
