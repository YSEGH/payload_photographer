import React from "react";
import payload from "payload";
import { GetServerSideProps } from "next";
import getConfig from "next/config";
import NotFound from "../components/NotFound";
import classes from "../css/page.module.css";
import { PAGES } from "../utils/pages";
import { pages } from "../components/Pages";

const {
  publicRuntimeConfig: { SERVER_URL },
} = getConfig();

export type Props = {
  statusCode: number;
  page: any;
  active: boolean;
};

const Page: React.FC<Props> = (props) => {
  const { page, active } = props;

  if (!page || !active) {
    return <NotFound />;
  }

  const CurrentPage: React.FC = pages[page.type];

  return (
    <main className={classes.page}>
      <CurrentPage />
    </main>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug
    ? (ctx.params.slug as string[]).join("/")
    : "home";

  const pages = await payload.findGlobal({
    slug: "pages",
  });

  let currentPage;
  PAGES.forEach((page) => {
    if (pages[page].navigation.slug === slug) {
      currentPage = pages[page];
    }
  });

  if (!currentPage) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      statusCode: 200,
      page: currentPage,
      active: currentPage.navigation.active,
    },
  };
};
