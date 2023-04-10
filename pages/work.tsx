import React from "react";
import ContainerWork from "../components/ContainerWork";
import { DataProvider } from "../context/DataContext";
import Header from "../components/Header";
import ButtonMore from "../components/ButtonMore";
import Search from "../components/Search";

type Props = {
  categories: [];
};

const Work: React.FC<Props> = ({ categories }) => {
  return (
    <>
      <Header />
      <DataProvider>
        <Search />
        <ContainerWork />
        <ButtonMore />
      </DataProvider>
    </>
  );
};

export default Work;
