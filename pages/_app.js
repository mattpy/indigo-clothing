import Layout from '../components/layout/layout';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/apollo-client';
import '../styles/globals.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
