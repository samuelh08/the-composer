import TopBar from 'components/modules/TopBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
