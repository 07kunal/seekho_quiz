import React from "react";
import StartPage from "./containers/StartPage";
import QuizPage from "./containers/QuizPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageContainer from "./components/PageContainer";
import questionSet from "./containers/QuizPage/data";
import ResultPage from "./containers/ResultPage";

const Pages = {
  START: "start",
  QUIZ: "quiz",
  RESULT: "result",
};

function App() {
  const [pageId, setPageId] = React.useState(Pages.START);
  const [allResponses, setAllResponses] = React.useState({});
  const moveToQuizPage = () => {
    setPageId(Pages.QUIZ);
  };
  const moveToResult = () => {
    setPageId(Pages.RESULT);
  };
  const saveResponse = (response, quesIdx, timeInSec) => {
    const { id, correctAns } = questionSet.questions[quesIdx];
    setAllResponses((prev) => ({
      ...prev,
      [id]: {
        score: correctAns === response ? 1 : 0,
        time: timeInSec,
        attempted: !!response,
      },
    }));
  };

  return (
    <PageContainer>
      {/* TODO App Header */}
      <>
        {pageId === Pages.START && (
          <StartPage moveToQuizPage={moveToQuizPage} />
        )}
        {pageId === Pages.QUIZ && (
          <QuizPage saveResponse={saveResponse} moveToResult={moveToResult} />
        )}
        {pageId === Pages.RESULT && <ResultPage responses={allResponses} moveToQuizPage={moveToQuizPage} />}
      </>
    </PageContainer>
  );
}

export default App;
