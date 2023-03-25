import React from "react";
import questionSet from "./data";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const QuizPage = ({ moveToResult, saveResponse }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [response, setResponse] = React.useState("");
  const [timer, setTimer] = React.useState(60);
  const totalQuestions = questionSet.questions.length;

  const handleNextClick = React.useCallback(() => {
    saveResponse(response, currentQuestionIndex, 60 - timer);
    if (currentQuestionIndex !== totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimer(60);
    } else {
      moveToResult();
    }
  }, [
    saveResponse,
    response,
    currentQuestionIndex,
    timer,
    totalQuestions,
    moveToResult,
  ]);

  const handleRadioChange = React.useCallback((event) => {
    setResponse(event.currentTarget.value);
  }, []);

  React.useEffect(() => {
    setResponse("");
    const clear = setInterval(() => {
      setTimer((prev) => {
        const val = prev - 1;
        return val;
      });
    }, 1000);

    return () => {
      clearTimeout(clear);
    };
  }, [currentQuestionIndex]);

  React.useEffect(() => {
    if (timer === 0) {
      handleNextClick();
    }
  }, [handleNextClick, timer]);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: "calc(100vh - 220px)" }}>
        <div
          className="d-flex justify-content-between"
          style={{ fontSize: "18px" }}
        >
          <Badge bg="primary">
            {currentQuestionIndex + 1}/{totalQuestions}
          </Badge>
          <Badge bg="warning" text="dark">
            {timer} sec
          </Badge>
        </div>
        <div className="pt-4 questions_quiz">
          <p>
            <b>Ques {currentQuestionIndex + 1}:</b>{" "}
            {questionSet.questions[currentQuestionIndex].text}
          </p>
        </div>
        <div className="pt-2">
          {/* TODO: Update Radio UI */}
          <Form key={currentQuestionIndex}>
            {questionSet.questions[currentQuestionIndex].options.map(
              (option, index) => {
                return (
                  <Form.Check
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    id={option.id}
                    label={option.text}
                    value={option.id}
                    onChange={handleRadioChange}
                    className="quiz_option py-2"
                  />
                );
              }
            )}
          </Form>
        </div>
      </div>
      <hr />
      <div className="fixed-bottom p-4 d-flex justify-content-center">
        <Button
          variant="primary"
          onClick={handleNextClick}
          className="quiz_btn"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default QuizPage;
