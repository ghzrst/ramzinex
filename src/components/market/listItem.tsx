import React from 'react';
import styles from '@/styles/components/market/ListItem.module.scss';
import Image from 'next/image';
import { Market } from '@/types/api/market';

interface MarketItemsProps {
  market: Market;
}

const ListItem: React.FC<MarketItemsProps> = ({ market }) => {
  return (
    <>
      <div className={styles.item}>
        <Image src={market.logo} alt="theme toggler" width={28} height={28} priority />
        <span className={styles.name}>
          {market.name.fa} ({market.name.en})
        </span>
        <span className={styles.currency}>{market.quote_currency_symbol.en.toUpperCase()}</span>
        <span className={styles.currency}>{market.buy.toLocaleString()}</span>
      </div>
    </>
  );
};

export default ListItem;
