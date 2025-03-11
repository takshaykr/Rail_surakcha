import React from "react";
import Problems from "../Components/Problems";
function CoachCleaniness({ ProblemsList }) {
  return (
    <>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="space-y-4">
          {ProblemsList.map((problem) => (
            <Problems
              key={problem._id}
              pid={problem._id}
              title={problem.title}
              discription={problem.description}
              status={problem.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CoachCleaniness;
