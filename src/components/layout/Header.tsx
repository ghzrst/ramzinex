import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import Button from '@/components/uikit/Button';
import styles from '@/styles/components/layout/Header.module.scss';

interface ChildComponentProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<ChildComponentProps> = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <header className={styles.header}>
        <input
          value={searchTerm}
          className={styles.searchInput}
          placeholder="جستجوی بازار"
          onChange={handleChange}
        />
        {/*I didn't have light icon in figma, so I used text instead of image*/}
        <Button title="تغییر تم" type="flat" onClick={toggleTheme} />
      </header>
    </>
  );
};
export default Header;
