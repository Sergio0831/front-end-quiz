import { QuizType } from '@/lib/definitions';
import QuizLayout from '../QuizLayout';
import classes from './styles.module.css';
import List from '../ui/List';
import PickerButton from '../ui/PickerButton';
import SubmitButton from '../ui/SubmitButton';
import ProgressBar from '../ui/ProgressBar';
import ErrorIcon from '../Icons/ErrorIcon';
import CorrectIcon from '../Icons/CorrectIcon';
import { useQuizState } from '@/hooks/useQuizState';
import Result from '../Result';

type QuizProps = {
  quiz: QuizType;
};

const Quiz = ({ quiz }: QuizProps) => {
  const {
    step,
    correct,
    incorrect,
    showCorrect,
    showError,
    selectedOption,
    submitBtn,
    correctAnswers,
    handleSelectOption,
    handleSubmit,
  } = useQuizState(quiz.questions);

  const questions = quiz.questions;
  const question = questions && questions[step];
  const letters = question
    ? question.options.map((_, index) => String.fromCharCode(65 + index))
    : [];
  const progressBarWidth = Math.round((step / (questions ? questions.length : 1)) * 100);

  return (
    <QuizLayout>
      {step !== quiz.questions.length ? (
        <>
          <div className={classes.wrapper}>
            <div className={classes.text}>
              <p className="body-s">
                Question {step + 1} of {questions?.length}
              </p>
              <p className="heading-m">{question?.question}</p>
            </div>
            <ProgressBar width={progressBarWidth} className={classes.bar} />
          </div>
          <div>
            <List className={classes.list}>
              {question?.options.map((option, index) => (
                <li key={index}>
                  <PickerButton
                    className={`${classes.btn} ${
                      correct && selectedOption === index ? classes.correct : ''
                    } ${incorrect && selectedOption === index ? classes.incorrect : ''} center-y`}
                    aria-selected={selectedOption === index}
                    onClick={() => handleSelectOption(index)}>
                    <span className={`${classes.icon} heading-s center`}>
                      {question && letters[index]}
                    </span>
                    <span className={`${classes.option} heading-s`}>{option}</span>
                    {!correct && showCorrect && option === question.answer ? <CorrectIcon /> : ''}
                    {correct && selectedOption === index ? <CorrectIcon /> : ''}
                    {incorrect && selectedOption === index ? <ErrorIcon /> : ''}
                  </PickerButton>
                </li>
              ))}
            </List>
            <SubmitButton aria-label="Submit answer" onClick={handleSubmit}>
              {submitBtn}
            </SubmitButton>
            {showError && (
              <div className={`${classes.error} center`}>
                <ErrorIcon />
                <p className={`body-m`}>Please select an answer</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <Result quiz={quiz} correctAnswers={correctAnswers} />
      )}
    </QuizLayout>
  );
};

export default Quiz;
