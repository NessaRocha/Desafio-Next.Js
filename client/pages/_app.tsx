import '../styles/globals.css';
import type { AppProps } from 'next/app';
import{ClientProvider} from '../contexts/ClientContext/index'

function App({ Component, pageProps }: AppProps) {
  return (<ClientProvider>
    <Component {...pageProps} />
    </ClientProvider>
  
  
  );
}

export default App;