import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import wrapper, { persistor } from '@stores/index';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('test')
  }, []);

  return (
    <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
            <Hydrate>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    </PersistGate>
  )
}

export default wrapper.withRedux(MyApp);
