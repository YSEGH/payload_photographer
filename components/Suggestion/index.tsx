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
      {suggestions.map((suggestion, i) => {
        console.log(suggestion);

        return (
          <div
            key={suggestion.docs[0].title}
            className={cx(
              style.suggestion,
              style[`suggestion__${i + 1}`],
              josefin.className
            )}
          >
            <Link href={`/portfolio/${suggestion.docs[0].slug}`}>
              <div className={style.overlay}></div>
              <img
                src={suggestion.docs[0].slider[0].photo.url}
                alt={suggestion.docs[0].slider[0].photo.alt}
              />
              <span>{suggestion.docs[0].title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestion;
