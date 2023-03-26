import React, { useContext, useEffect } from "react";
import { GetServerSideProps } from "next";
import payload from "payload";
import ContainerWork from "../components/ContainerWork";
import { useRouter } from "next/router";
import Search from "../components/Search";
import { DataContext, DataProvider } from "../context/DataContext";

const Test: React.FC = () => {
  const router = useRouter();

  const { filter = "" } = router.query;
  const onClickHandler = () => {};

  return (
    <>
      {/* <Search />
            
       */}
      <DataProvider>
        <ContainerWork />
      </DataProvider>
    </>
  );
};

export default Test;
