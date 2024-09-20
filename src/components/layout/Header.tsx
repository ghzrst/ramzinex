import styles from '@/styles/layout/Header.module.scss';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <header className={styles.header}>
        <button onClick={toggleTheme}>toggle</button>
      </header>
    </>
  );
}
