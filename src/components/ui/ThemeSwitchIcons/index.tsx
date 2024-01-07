import MoonIcon from '../../Icons/MoonIcon';
import SunIcon from '../../Icons/SunIcon';
import { Theme } from '../../theme-provider';
import classes from './styles.module.css';

type ThemeSwitchIconsProps = {
  theme: Theme;
  handleClick: () => void;
};

const ThemeSwitchIcons = ({ theme, handleClick }: ThemeSwitchIconsProps) => {
  return (
    <button
      type="button"
      aria-label={`Change to ${theme === 'dark' ? 'dark' : 'light'} theme`}
      className={classes.btn}
      onClick={handleClick}>
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeSwitchIcons;
