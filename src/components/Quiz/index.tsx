import { QuizType } from '@/lib/definitions';
import QuizLayout from '../QuizLayout';
import classes from './styles.module.css';
import { useState } from 'react';
import List from '../ui/List';
import PickerButton from '../ui/PickerButton';
import SubmitButton from '../ui/SubmitButton';
import ProgressBar from '../ui/ProgressBar';
import ErrorIcon from '../Icons/ErrorIcon';
import CorrectIcon from '../Icons/CorrectIcon';

type QuizProps = {
  quiz: QuizType;
};

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [submitBtn, setSubmitBtn] = useState('Submit Answer');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const { questions } = quiz;
  const question = questions[step];
  const letters = question.options.map((_, index) => String.fromCharCode(65 + index));
  const progressBarWidth = Math.round((step / questions.length) * 100);

  const handleSelectOption = (index: number) => {
    setSelectedOption((prev) => (prev === index ? null : index));
    setCorrect(false);
    setIncorrect(false);
    setShowCorrect(false);
    setSubmitBtn('Submit Answer');
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      setShowError(true);
    } else {
      setShowError(false);
      setShowCorrect(true);
      setSubmitBtn('Next Question');

      if (question.options[selectedOption] === question.answer) {
        setCorrect(true);
        setCorrectAnswers((prev) => prev + 1);
      } else {
        setIncorrect(true);
      }

      if (submitBtn === 'Next Question') {
        setStep((prev) => prev + 1);
        setCorrect(false);
        setIncorrect(false);
        setShowCorrect(false);
        setSubmitBtn('Submit Answer');
        setSelectedOption(null);
      }
    }

    console.log(`Correct Answers ${correctAnswers}`);
  };

  return (
    <QuizLayout>
      <div className={classes.wrapper}>
        <div className={classes.text}>
          <p className="body-s">
            Question {step + 1} of {questions.length}
          </p>
          <p className="heading-m">{question.question}</p>
        </div>
        <ProgressBar width={progressBarWidth} className={classes.bar} />
      </div>
      <div>
        <List className={classes.list}>
          {question.options.map((option, index) => (
            <li key={index}>
              <PickerButton
                className={`${classes.btn} ${
                  correct && selectedOption === index ? classes.correct : ''
                } ${incorrect && selectedOption === index ? classes.incorrect : ''} center-y`}
                aria-selected={selectedOption === index}
                onClick={() => handleSelectOption(index)}>
                <span className={`${classes.icon} heading-s center`}>{letters[index]}</span>
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
    </QuizLayout>
  );
};

export default Quiz;
