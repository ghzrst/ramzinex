import React from 'react';
import styles from '@/styles/components/uikit/Loading.module.scss';

interface LoadingProps {
  text: string;
  icon?: React.ReactNode;
}
const Loading: React.FC<LoadingProps> = ({ text, icon }) => {
  return (
    <div className={styles.loadingContainer}>
      {icon && <div className={styles.loadingIcon}>{icon}</div>}

      <div className={styles.loadingText}>{text}</div>
    </div>
  );
};
export default Loading;
