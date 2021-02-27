import Head from 'next/head';
import { MainLayout } from '../src/components';
import { LoginScreen } from '../src/screens';

const Home: React.FC = () => {
  console.log('eae');

  return (
    <>
      <Head>
        <title>Rodrigo Luz App</title>
      </Head>

      <MainLayout>
        <LoginScreen/>
      </MainLayout>
    </>
  );
};

export default Home;
