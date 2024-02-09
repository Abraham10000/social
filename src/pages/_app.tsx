import { ProfileProvider } from '../utils/ProfileContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProfileProvider>
      <Component {...pageProps} />   
 
    </ProfileProvider>
  );
}

export default MyApp;
