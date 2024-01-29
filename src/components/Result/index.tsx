import QuizLayout from '../QuizLayout';
import { QuizType } from '@/lib/definitions';
import Category from '../ui/Category';
import SubmitButton from '../ui/SubmitButton';
import classes from './styles.module.css';

type ResultProps = {
  quiz: QuizType;
  correctAnswers: number;
};

const Result = ({ quiz, correctAnswers }: ResultProps) => {
  return (
    <QuizLayout>
      <h1 className="heading-l heading-l--light">
        Quiz completed <span className="heading-l--bold">You scored...</span>
      </h1>
      <div>
        <div className={classes.result}>
          <Category category={{ title: quiz.title, icon: quiz.icon }} />
          <div className={classes.result__info}>
            <span className="display">{correctAnswers}</span>
            <span className="body-m">out of {quiz.questions.length}</span>
          </div>
        </div>
        <SubmitButton onClick={() => (window.location.href = '/')}>Play Again</SubmitButton>
      </div>
    </QuizLayout>
  );
};

export default Result;
