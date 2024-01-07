import classes from './styles.module.css';

type QuizLayoutProps = {
  children: React.ReactNode;
};

const QuizLayout = ({ children }: QuizLayoutProps) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default QuizLayout;
