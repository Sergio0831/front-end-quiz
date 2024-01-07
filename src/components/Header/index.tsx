import classes from './styles.module.css';

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: HeaderProps) => {
  return <header className={`${classes.header} ${className}`}>{children}</header>;
};

export default Header;
