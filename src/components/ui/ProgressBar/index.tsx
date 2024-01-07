import clsx from 'clsx';
import classes from './styles.module.css';

type ProgressBarProps = {
  className?: string;
};

const ProgressBar = ({ className, ...props }: ProgressBarProps) => {
  const barClasses = clsx(
    {
      [classes.bar]: true,
    },
    className,
  );

  return (
    <div className={barClasses}>
      <div className={classes.bar__progress} {...props}></div>
    </div>
  );
};

export default ProgressBar;
