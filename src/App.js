import { useState } from "react";
import "./App.css";

const cards = [
  {
    id: 3457,
    question: "What language is React Based on ?",
    answer: "javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of react apps ?",
    answer: "Components",
  },
  {
    id: 8832,
    question:
      "What's the name of the syntax we use to describe a UI in React ?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components ?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory ?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state ?",
    answer: "Controlled element",
  },
];

function Card({ question, answer }) {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  return (
    <div className={`card ${show ? "open" : ""}`} onClick={handleClick}>
      <p>{show ? answer : question}</p>
    </div>
  );
}

function App() {
  return (
    <div className="card_container">
      {cards.map((c) => (
        <Card key={c.id} question={c.question} answer={c.answer} />
      ))}
    </div>
  );
}

export default App;

