import { Theme } from '../../theme-provider';
import classes from './styles.module.css';

type ThemeSwitchProps = {
  theme: Theme;
  onThemeChange: () => void;
};

const ThemeSwitch = ({ onThemeChange, theme }: ThemeSwitchProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      aria-checked={theme === 'dark'}
      className={classes.switch}
      onClick={onThemeChange}>
      <span className={classes.switch__circle}></span>
    </button>
  );
};

export default ThemeSwitch;
