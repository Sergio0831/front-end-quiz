import { useState } from 'react';
import Header from './components/Header';
import QuizStart from './components/QuizStart';
import ThemeSwitchContainer from './components/ThemeSwitchContainer';
import Wrapper from './components/Wrapper';
import { quizzes } from './data/data';
import Quiz from './components/Quiz';
import classes from './App.module.css';
import Category from './components/ui/Category';
import ElipseIcon from './components/Icons/Elipse';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const selectedQuiz = quizzes.find((quiz) => quiz.title === selectedCategory);

  const quizSubjects = quizzes.map((quiz) => ({
    title: quiz.title,
    icon: quiz.icon,
  }));

  const handleQuizStart = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <ElipseIcon className={`${classes.elipse} ${classes.elipse__top}`} />
      <Wrapper>
        <Header className={classes.header}>
          {selectedQuiz && (
            <Category category={{ title: selectedQuiz.title, icon: selectedQuiz.icon }} />
          )}
          <ThemeSwitchContainer className={classes.switch} />
        </Header>
        {selectedQuiz ? (
          <Quiz quiz={selectedQuiz} />
        ) : (
          <QuizStart quizSubjects={quizSubjects} onQuizStart={handleQuizStart} />
        )}
      </Wrapper>
      <ElipseIcon className={`${classes.elipse} ${classes.elipse__bottom}`} />
    </>
  );
}

export default App;
