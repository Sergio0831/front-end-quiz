import { CategoryType } from '@/lib/definitions';
import QuizLayout from '../QuizLayout';
import classes from './styles.module.css';
import Category from '../ui/Category';
import List from '../ui/List';
import PickerButton from '../ui/PickerButton';

type QuizStartProps = {
  quizSubjects: CategoryType[];
  onQuizStart: (category: string) => void;
};

const QuizStart = ({ quizSubjects, onQuizStart }: QuizStartProps) => {
  return (
    <QuizLayout>
      <div className={classes.text}>
        <h1 className="heading-l heading-l--regular">
          Welcome to the <span className="heading-l--bold">Frontend Quiz!</span>
        </h1>
        <p className="body-s">Pick a subject to get started.</p>
      </div>
      <List>
        {quizSubjects.map((subject) => (
          <li key={subject.title}>
            <PickerButton aria-label="Pick category" handleClick={() => onQuizStart(subject.title)}>
              <Category category={subject} />
            </PickerButton>
          </li>
        ))}
      </List>
    </QuizLayout>
  );
};

export default QuizStart;
