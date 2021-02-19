import Head from 'next/head';
import { Layout } from '../components';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Rodrigo Luz App</title>
    </Head>
    <Layout title="Title" description="Description">
      Content
    </Layout>
  </>
);

export default Home;
