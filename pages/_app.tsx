import type { AppProps } from "next/app";
import "../styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main data-scroll-container className="container">
      <Component {...pageProps} />
    </main>
  );
}
