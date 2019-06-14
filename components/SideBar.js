import React, {useState} from "react";
import { useStateValue } from "../state/state";
import Logo from './Logo'
import Navigation from "./Navigation";

const Sidebar = () => {
  const [sideBarOpenState, setSideBarOpenState] = useState(false)
  const [{ data }, dispatch] = useStateValue();
  return (
    <nav
      id="Sidebar"
      onMouseEnter={e => {
        // NOTE: This is requested by the test 
        // but breaks usability on touch devices
        setSideBarOpenState(true);
      }}
      onMouseLeave={e => {
        setSideBarOpenState(false);
      }}
    >
      <Logo
        sideBarOpen={sideBarOpenState}
      />
      <Navigation
        sideBar
        sideBarOpen={sideBarOpenState}
        vertical
        defaultEl={"Settings"}
        elList={data.siteMap.pages}
      />
      <style jsx>{`
        #Sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          background: black;
          padding: 40px 20px 0 0;
          color: ${data.css.sideBarFontColor};
          z-index: 1;
        }
      `}</style>
    </nav>
  );
};
export default Sidebar;