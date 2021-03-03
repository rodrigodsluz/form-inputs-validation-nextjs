import Head from 'next/head';
import { MainLayout } from '../src/components';

const Home: React.FC = () => {
  console.log('eae');

  return (
    <>
      <Head>
        <title>D1 App</title>
      </Head>

      <MainLayout><h1>Home</h1></MainLayout>
    </>
  );
};

export default Home;
