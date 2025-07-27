import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          height: 100%;
          background-color: #0f1117;
          overflow-x: hidden;
        }

        #__next {
          height: 100%;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
