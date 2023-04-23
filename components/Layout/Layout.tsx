import Header from "./Header";
import { Exo, Kaisei_HarunoUmi } from "next/font/google";
import Logo from "./Logo";

export const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const kasei = Kaisei_HarunoUmi({
  weight: ["400", "500", "700"],
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
