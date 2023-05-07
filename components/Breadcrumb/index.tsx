import React from "react";
import { useRouter } from "next/router";
import cx from "classnames";
import global from "../../css/global.module.css";
import styles from "./style/index.module.css";
import Crumb from "./components/Crumb";

const generatePaths = (path) => {
  return path.split("/").filter((v) => v.length > 0);
};

const Breadcrumb = () => {
  const router = useRouter();
  const breadcrumbs = React.useMemo(() => {
    const asPathWithoutQuery = router.asPath.split("?")[0];
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      return {
        href,
        text: decodeURIComponent(subpath),
      };
    });

    return [{ href: "/", text: "Accueil" }, ...crumblist];
  }, [router.asPath]);

  return (
    <div
      className={cx(styles.breadcrumb, global.container__large)}
      aria-label="breadcrumb"
    >
      {breadcrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
      ))}
    </div>
  );
};

export default Breadcrumb;
