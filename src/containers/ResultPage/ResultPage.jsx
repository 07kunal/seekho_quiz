import React from "react";
import Button from "react-bootstrap/Button";

const ResultPage = ({ responses, moveToQuizPage }) => {
  const { score, avgTime, totalQues, correctAns } = React.useMemo(() => {
    const allResponses = Object.values(responses);
    const totalQues = allResponses.length;
    let totalTime = 0;
    let totalScore = 0;
    for (const response of allResponses) {
      totalTime += response.time;
      totalScore += response.score;
    }

    return {
      score: (totalScore / totalQues) * 100,
      avgTime: totalTime / totalQues,
      correctAns: totalScore,
      totalQues,
    };
  }, [responses]);

  return (
    <div className="quiz_result">
      {/* <p>
        Score: {score}% ({correctAns}/{totalQues}){" "}
      </p>
      <p>Avg Time: {avgTime} Sec</p>
      <p>Result: {score >= 50 ? "Pass" : "Fail"}</p> */}
      <div className="percentage_ d-flex justify-contain-center align-item-center flex-column py-4">
        <h2>Your Score</h2>
        <span>
          {score}% ({correctAns}/{totalQues})
        </span>
      </div>
      <div className="question_result py-4">
        <div className="time_taken">
          <p>
            Avg Time: <span> {avgTime} Sec</span>
          </p>
        </div>
        <div className="time_taken">
          <p>
            Result: <span>{score >= 50 ? "Pass" : "Fail"}</span>{" "}
          </p>
        </div>
      </div>

      <Button variant="primary" onClick={moveToQuizPage} className="quiz_btn">
        Retry
      </Button>
    </div>
  );
};

export default ResultPage;
