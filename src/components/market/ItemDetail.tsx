import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from '@/styles/components/market/ItemDetail.module.scss';

import { Market } from '@/types/api/market';

import Button from '@/components/uikit/Button';

interface MarketItemsProps {
  market: Market;
}

const ItemDetail: React.FC<MarketItemsProps> = ({ market }) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const details = useMemo(() => {
    if (!market) return [];
    return [
      { title: 'نام انگلیسی', data: market.name.en },
      {
        title: 'قیمت',
        data: `${market.buy.toLocaleString()} ${market.quote_currency_symbol.en.toUpperCase()}`,
      },
      {
        title: 'تغییرات ۲۴ ساعته',
        data: market.financial ? `${market.financial?.last24h.change_percent} %` : '-',
      },
      {
        title: 'حجم معاملاتی',
        data: market.financial
          ? `${market.financial?.last24h?.quote_volume?.toLocaleString()} ${market.quote_currency_symbol.en.toUpperCase()}`
          : '-',
      },
    ];
  }, [market]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={market.logo} alt="theme toggler" width={40} height={40} priority />
        <span>{market.name.en}</span>
      </div>
      <div className={styles.main}>
        {details.map((item, index) => (
          <div key={index} className={styles.details}>
            <span>{item.title}</span>
            <span className="ltr-dir">{item.data}</span>
          </div>
        ))}
      </div>
      <div className={styles.footer} onClick={handleBack}>
        <Button block={true} title="بازگشت" type="outline" onClick={handleBack} />
      </div>
    </div>
  );
};

export default ItemDetail;
