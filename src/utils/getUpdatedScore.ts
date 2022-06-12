import { Option, QuizQuestion } from "../data/quiz.types";
import { quizOne } from "../data/quiz";

export function getUpdatedScore(
  currentScore: number,
  question: QuizQuestion,
  selectedOption: Option
) {
  const selectedQuestionDetails = quizOne.questions.find(
    (q) => q.question === question.question
  );

  const selectedOptionDetails = selectedQuestionDetails?.options.find(
    (o) => o.text === selectedOption.text
  );

  return selectedOptionDetails?.isRight ? currentScore + 5 : currentScore - 1;
}
