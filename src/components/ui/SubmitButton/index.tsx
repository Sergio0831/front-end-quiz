import { ButtonHTMLAttributes } from 'react';
import classes from './styles.module.css';
import clsx from 'clsx';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  handleClick?: () => void;
  className?: string;
}

const SubmitButton = ({ children, handleClick, className, ...props }: SubmitButtonProps) => {
  const btnClasses = clsx(
    {
      [classes.btn]: true,
    },
    className,
  );

  return (
    <button type="button" onClick={handleClick} className={btnClasses} {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;
