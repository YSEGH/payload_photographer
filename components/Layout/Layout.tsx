import Header from "./Header";
import { Exo } from "next/font/google";
import Logo from "./Logo";

export const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className={exo.className}>{children}</main>
    </>
  );
}
