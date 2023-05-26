import React from "react";
import style from "./style/index.module.css";
import cx from "classnames";
import Link from "next/link";
import { josefin } from "../../utils/fonts";
import ArrowSVG from "./components/ArrowSVG";

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
            <ArrowSVG index={i} />
          </Link>
          <span>{suggestion.docs[0].title}</span>
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
