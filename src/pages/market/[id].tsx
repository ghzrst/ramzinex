import Head from 'next/head';
import { useFetchData } from '@/hooks/useFetchData';
import { useRouter } from 'next/router';
import ItemDetail from '@/components/market/ItemDetail';
import Loading from '@/components/uikit/Loading';

export default function Market() {
  const router = useRouter();
  const id = router.query.id;
  const { data, error, isLoading } = useFetchData(`exchange/api/v1.0/exchange/pairs/${id}`);
  if (isLoading) return <Loading text="در حال بارگزاری..." />;
  return (
    <>
      <Head>
        <title>رمزینکس</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className="main">
          {error && <div>Error: </div>}
          {data && (
            <div>
              <ItemDetail market={data.data} />
            </div>
          )}
        </main>
      </div>
    </>
  );
}