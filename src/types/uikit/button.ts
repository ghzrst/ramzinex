import React from 'react';

export interface ButtonProps {
  title: string;
  block?: boolean;
  type?: 'flat' | 'link' | 'outline';
  onClick?: () => void;
  icon?: string | React.ReactNode; // icon can be an image URL or React node (e.g., from an icon library)
}
