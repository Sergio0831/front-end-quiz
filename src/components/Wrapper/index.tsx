import classes from './styles.module.css';

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
