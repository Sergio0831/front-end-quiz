import { QuizType } from '@/lib/definitions';
import QuizLayout from '../QuizLayout';
import classes from './styles.module.css';
import { useState } from 'react';
import List from '../ui/List';
import PickerButton from '../ui/PickerButton';
import SubmitButton from '../ui/SubmitButton';
import ProgressBar from '../ui/ProgressBar';

type QuizProps = {
  quiz: QuizType;
};

const Quiz = ({ quiz }: QuizProps) => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);
  const { questions } = quiz;
  const question = questions[step];
  const letters = ['A', 'B', 'C', 'D'];

  const handleSelectOption = (index: number) => {
    setSelectedOption((prev) => (prev === index ? null : index));
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      setShowError(true);
    } else {
      setShowError(false);
    }
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
        <ProgressBar className={classes.bar} />
      </div>
      <div>
        <List className={classes.list}>
          {question.options.map((option, index) => (
            <li key={index}>
              <PickerButton
                className={`${classes.btn} center-y`}
                aria-selected={selectedOption === index}
                onClick={() => handleSelectOption(index)}>
                <span className={`${classes.icon} heading-s center`}>{letters[index]}</span>
                <span className="heading-s">{option}</span>
              </PickerButton>
            </li>
          ))}
        </List>
        <SubmitButton aria-label="Submit answer" onClick={handleSubmit}>
          Submit Answer
        </SubmitButton>
        {showError && <p>Please select an answer</p>}
      </div>
    </QuizLayout>
  );
};

export default Quiz;
