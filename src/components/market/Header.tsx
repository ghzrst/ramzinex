import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import Button from '@/components/uikit/Button';
import styles from '@/styles/components/market/Header.module.scss';
import Image from 'next/image';

interface ChildComponentProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setSortBy: (type: string) => void;
}

const Header: React.FC<ChildComponentProps> = ({ searchTerm, setSearchTerm, setSortBy }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSortBy = (type: string) => {
    setSortBy(type);
  };
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.searchContainer}>
          <input
            value={searchTerm}
            className={styles.searchInput}
            placeholder="جستجوی بازار"
            onChange={handleChange}
          />
          {/*I didn't have light icon in figma, so I used text instead of image*/}
          <Button title="تغییر تم" type="flat" onClick={toggleTheme} />
        </div>
        <div className={styles.sortContainer}>
          <span className={styles.sortItems} onClick={() => handleSortBy('name')}>
            نام
            <Image src="/images/icons/sort.png" alt="" width={12} height={12} priority />
          </span>
          <span className={styles.sortItems} onClick={() => handleSortBy('price')}>
            آخرین قیمت
            <Image src="/images/icons/sort.png" alt="" width={12} height={12} priority />
          </span>
        </div>
      </header>
    </>
  );
};
export default Header;
