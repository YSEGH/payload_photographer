import React, { useRef } from "react";
import style from "../style/linksvg.module.css";
import RoundSVG from "./RoundSVG";
import ArrowSVG from "./ArrowSVG";

const LinkSVG = ({ index }) => {
  const btn = useRef(null);
  const onMouseMoveHandler = (e) => {
    const position = btn.current.getBoundingClientRect();
    //Get the correct position of cursor when hover to the button
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - window.scrollY - position.top - position.height / 2;

    //Set the button position
    btn.current.children[0].style.transform = `translate(${x * 0.2}px, ${
      y * 0.2
    }px)`;
    btn.current.children[1].style.transform = `translate(${x * 0.25}px, ${
      y * 0.3
    }px)`;
  };

  const onMouseOutHandler = (e) => {
    btn.current.children[0].style.transform = "translate(0px, 0px)";
    btn.current.children[1].style.transform = "translate(0px, 0px)";
  };
  return (
    <div
      ref={btn}
      onMouseMove={onMouseMoveHandler}
      onMouseOut={onMouseOutHandler}
      className={style.link_svg}
    >
      <RoundSVG index={index} />
      <ArrowSVG index={index} />
    </div>
  );
};
export default LinkSVG;
