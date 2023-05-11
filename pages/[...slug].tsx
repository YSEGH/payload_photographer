import React, { useContext, useEffect } from "react";
import payload from "payload";
import { GetServerSideProps } from "next";
import getConfig from "next/config";
import { Type as PageType } from "../collections/Page";
import NotFound from "../components/NotFound";
import Head from "../components/Head";
import classes from "../css/page.module.css";
import RenderBlocks from "../components/RenderBlocks";
import { DataContext } from "../context/DataContext";
import { setMenuLinks } from "../context/Actions/appActions";

const {
  publicRuntimeConfig: { SERVER_URL },
} = getConfig();

export type Props = {
  page?: PageType;
  menu: any[];
  statusCode: number;
};

const Page: React.FC<Props> = (props) => {
  const state = useContext(DataContext);
  const { page, menu } = props;

  useEffect(() => {
    setMenuLinks(menu, state.dispatchApp);
    return () => {};
  }, []);

  if (!page) {
    return <NotFound />;
  }

  return (
    <main className={classes.page}>
      <Head
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <RenderBlocks layout={page.layout} />
    </main>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug
    ? (ctx.params.slug as string[]).join("/")
    : "home";

  const pageQuery = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const { links } = await payload.findGlobal({
    slug: "menu",
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery.docs[0],
      menu: links,
    },
  };
};
