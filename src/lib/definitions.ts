export type CategoryType = {
  title: 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility';
  icon: React.ReactElement;
};

export type QuestionType = {
  question: string;
  options: string[];
  answer: string;
};

export type QuizType = {
  questions: QuestionType[];
} & CategoryType;
