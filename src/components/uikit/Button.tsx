import React from 'react';
import Image from 'next/image';

import { ButtonProps } from '@/types/uikit/button';

import styles from '@/styles/components/uikit/Button.module.scss';

const Button: React.FC<ButtonProps> = ({ title, block = false, type = 'flat', onClick, icon }) => {
  let className = styles.btn;

  if (type === 'link') {
    className += ` ${styles.btnLink}`;
  } else if (type === 'outline') {
    className += ` ${styles.btnOutline}`;
  }

  if (block) {
    className += ` ${styles.btnBlock}`;
  }

  return (
    <button className={className} onClick={onClick}>
      {icon &&
        (typeof icon === 'string' ? (
          <Image src={icon} alt="icon" className={styles.btnIcon} width={28} height={28} />
        ) : (
          <span className={styles.btnIcon}>{icon}</span>
        ))}

      {title}
    </button>
  );
};

export default Button;
