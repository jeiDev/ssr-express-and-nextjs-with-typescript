import React from 'react';
import App, { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps} />
  )

}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
}


export default MyApp;
