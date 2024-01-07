import clsx from 'clsx';
import classes from './styles.module.css';

type ListProps = {
  children: React.ReactNode;
  className?: string;
};

const List = ({ children, className }: ListProps) => {
  const listClasses = clsx(
    {
      [classes.list]: true,
    },
    className,
  );

  return <ul className={listClasses}>{children}</ul>;
};

export default List;
