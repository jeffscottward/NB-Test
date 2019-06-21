import React, { useState } from "react";
import NavElList from './NavElList'

const Navigation = (props) => {
  const [activeEl, setActiveEl] = useState(props.defaultEl);
  const toggleActiveEl = (el) => {if (activeEl !== el) {setActiveEl(el)}}
  return (
    <div className="NavigationEl">
      <NavElList
        follow={props.follow}
        followBar={props.followBar}
        sideBar={props.sideBar}
        sideBarOpen={props.sideBarOpen}
        subNav={props.subNav}
        mainNav={props.mainNav}
        follow={props.follow}
        tabs={props.tabs}
        vertical={props.vertical}
        elList={props.elList}
        activeEl={activeEl}
        toggleActiveEl={toggleActiveEl}
      />
      <style>
        {`
        .NavigationEl {
          position: relative;
          z-index: 1;
        }
      `}
      </style>
    </div>
  );
};

export default Navigation