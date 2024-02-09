import { ProfileProvider } from '../utils/ProfileContext';
import "./src/pages/app/globals.css";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProfileProvider>
      <Component {...pageProps} />   
 
    </ProfileProvider>
  );
}

export default MyApp;
