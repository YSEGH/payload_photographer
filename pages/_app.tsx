import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AppProvider } from "../context/context";
import "../css/style.css";
import { CardProvider } from "../components/CardContainer/context/context";
import ScrollToTop from "../components/ScrollToTop";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <AppProvider>
      <CardProvider>
        <Layout>
          <Component {...pageProps} />
          <ScrollToTop />
        </Layout>
      </CardProvider>
    </AppProvider>
  );
}
