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
      defaultEl={"People"}
      subNav
      elList={GlobalValues.siteMap.pages.Settings.Defaults["Custom Fields"]}
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