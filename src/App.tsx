import "./styles.css";
import Header from "./components/Header";
import { useReducer } from "react";

type ScoreState = {
  score: number;
  queNo: number;
};

const initState: ScoreState = {
  score: 0,
  queNo: 1
};

type QuizAction =
  | {
      type: "INCREMENT_SCORE";
      payload: { incrementBy: number };
    }
  | {
      type: "DECREMENT_SCORE";
      payload: { decrementBy: number };
    }
  | {
      type: "RESET";
    };

const quizReducer = (state: ScoreState, action: QuizAction) => {
  switch (action.type) {
    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + action.payload.incrementBy,
        queNo: state.queNo + 1
      };
    case "DECREMENT_SCORE":
      return {
        ...state,
        score: state.score - action.payload.decrementBy,
        queNo: state.queNo - 1
      };
    case "RESET":
      return { ...initState };
  }
};

export default function App() {
  const [state, dispatch] = useReducer(quizReducer, initState);

  return (
    <div className="App">
      <Header username="Shubham" score={state.score} />

      <h2> current question number: {state.queNo} </h2>

      <button
        className="btn"
        onClick={() =>
          dispatch({ type: "INCREMENT_SCORE", payload: { incrementBy: 10 } })
        }
      >
        Right Answer
      </button>

      <button
        className="btn"
        onClick={() =>
          dispatch({ type: "DECREMENT_SCORE", payload: { decrementBy: 10 } })
        }
      >
        Wrong Answer
      </button>

      <button className="btn" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}
