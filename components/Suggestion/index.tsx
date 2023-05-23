import React from "react";
import style from "./style/index.module.css";
import cx from "classnames";
import Link from "next/link";
import { josefin } from "../../utils/fonts";
import LinkSVG from "./components/LinkSVG";

type Props = {
  suggestions: any;
};

const Suggestion: React.FC<Props> = ({ suggestions }) => {
  return (
    <div className={cx(style.suggestions_container)}>
      {suggestions.map((suggestion, i) => (
        <div
          key={suggestion.docs[0].title}
          className={cx(
            style.suggestion,
            style[`suggestion__${i}`],
            josefin.className
          )}
        >
          <Link href={`/portfolio/${suggestion.docs[0].slug}`} scroll={false}>
            <LinkSVG index={i} />
            <span>{suggestion.docs[0].title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
