import React from "react";
import dynamic from "next/dynamic";
import GlobalValues from "../constants/globalValues";

const NavNoSSR = dynamic(() => import("../components/Navigation"), {
  ssr: false
});

const SubNav = (props, children) => (
  <div id="SubNav">
    <NavNoSSR
      follow
      defaultEl={props.defaultEl}
      subNav
      elList={props.elList}
    />
    <style jsx>{`
      #SubNav {
        padding-top: 10px;
        border-bottom: ${GlobalValues.css.divider};
      }
    `}</style>
  </div>
);

export default SubNav