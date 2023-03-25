import React from "react";
import Button from "react-bootstrap/Button";
import ListItem from "../../components/ListItem";
import ListGroup from "react-bootstrap/ListGroup";

const StartPage = ({ moveToQuizPage }) => {
  return (
    <div className="d-flex align-items-center">
      <div style={{ maxWidth: "500px" }}>
        <ListGroup>
          <ListGroup.Item>
            <ListItem
              icon="bi bi-clock"
              title="5 Mins"
              subtitle="Keep in mind that it's a time-bound quiz."
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <ListItem
              icon="bi bi-patch-question"
              title="5 Questions"
              subtitle="We believe that you will ace it!"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <ListItem
              icon="bi bi-award"
              title="50% Passing Criteria"
              subtitle="All the best"
            />
          </ListGroup.Item>
        </ListGroup>
        <div
          className="d-flex justify-content-center p-2"
          style={{ width: "100%" }}
        >
          <Button variant="primary" onClick={moveToQuizPage} className="quiz_btn" >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
