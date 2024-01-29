import { QuestionType } from '@/lib/definitions';
import { useState } from 'react';

export const useQuizState = (questions: QuestionType[]) => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [submitBtn, setSubmitBtn] = useState('Submit Answer');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showError, setShowError] = useState(false);

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

      if (questions) {
        if (questions[step].options[selectedOption] === questions[step].answer) {
          setCorrect(true);
        } else {
          setIncorrect(true);
        }

        if (submitBtn === 'Next Question') {
          if (questions[step].options[selectedOption] === questions[step].answer) {
            setCorrectAnswers((prev) => prev + 1);
          }
          setStep((prev) => prev + 1);
          setCorrect(false);
          setIncorrect(false);
          setShowCorrect(false);
          setSubmitBtn('Submit Answer');
          setSelectedOption(null);
        }
      }
    }
  };

  return {
    step,
    correct,
    incorrect,
    showCorrect,
    correctAnswers,
    showError,
    selectedOption,
    submitBtn,
    handleSelectOption,
    handleSubmit,
  };
};
