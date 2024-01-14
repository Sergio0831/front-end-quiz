import clsx from 'clsx';
import classes from './styles.module.css';

type ProgressBarProps = {
  className?: string;
  width: number;
};

const ProgressBar = ({ className, width, ...props }: ProgressBarProps) => {
  const barClasses = clsx(
    {
      [classes.bar]: true,
    },
    className,
  );

  return (
    <div className={barClasses}>
      <div className={classes.bar__progress} {...props} style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ProgressBar;
