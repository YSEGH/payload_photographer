import React from "react";
import style from "./style/index.module.css";
import cx from "classnames";
import Link from "next/link";

type Props = {
  suggestions: any;
};

const Suggestion: React.FC<Props> = ({ suggestions }) => {
  console.log(suggestions);

  return (
    <div className={cx(style.suggestions_container)}>
      {suggestions.map((suggestion) => (
        <Link
          key={suggestion.docs[0].title}
          href={`/portfolio/${suggestion.docs[0].slug}`}
        >
          {suggestion.docs[0].title}
        </Link>
      ))}
    </div>
  );
};

export default Suggestion;
