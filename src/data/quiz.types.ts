export type Option = {
  text: string;
  isRight: boolean;
};

export type QuizQuestion = {
  question: string;
  options: Option[];
  points: number;
};

export type Quiz = {
  quizName: string;
  questions: QuizQuestion[];
};
