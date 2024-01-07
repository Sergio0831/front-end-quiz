import { useTheme } from '@/hooks/useTheme';
import ThemeSwitch from '../ui/ThemeSwitch';
import ThemeSwitchIcons from '../ui/ThemeSwitchIcons';
import classes from './styles.module.css';

type ThemeSwitchContainerProps = {
  className?: string;
};

const ThemeSwitchContainer = ({ className }: ThemeSwitchContainerProps) => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className={`${classes.container} ${className}`}>
      <ThemeSwitchIcons theme="light" handleClick={() => setTheme('light')} />
      <ThemeSwitch onThemeChange={handleThemeChange} theme={theme} />
      <ThemeSwitchIcons theme="dark" handleClick={() => setTheme('dark')} />
    </div>
  );
};

export default ThemeSwitchContainer;
