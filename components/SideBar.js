import React, {useState} from "react";
import GlobalValues from "../constants/globalValues";
import Logo from './Logo'

import dynamic from "next/dynamic";

const NavNoSSR = dynamic(() => import("../components/Navigation"), {
  ssr: false
});

const Sidebar = () => {
  const [sideBarOpenState, setSideBarOpenState] = useState(false)
  return (
    <nav id="Sidebar">
      <Logo
        onClick={() => {
          setSideBarOpenState(!sideBarOpenState);
        }}
        sideBarOpen={sideBarOpenState}
      />
      <NavNoSSR
        sideBar
        sideBarOpen={sideBarOpenState}
        vertical
        defaultEl={"Settings"}
        elList={GlobalValues.siteMap.pages}
      />
      <style jsx>{`
        #Sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          background: black;
          padding: 40px 10px 0 0;
          color: ${GlobalValues.css.sideBarFontColor};
          z-index: 1;
        }
      `}</style>
    </nav>
  );
};
export default Sidebar;