import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { DataProvider } from "../context/DataContext";
import "../css/style.css";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}
