import React, { useState } from "react";
import {Nav} from "reactstrap";
import NavElList from './NavElList'

const ContentNav = (props) => {
  const [activeEl, setActiveEl] = useState(1)
  const toggleEl = (el) => {if (activeEl !== el) {setActiveEl(el)}}
  return (
    <div id="ContentNav">
      <NavElList
        follow={props.follow}
        followBar={props.followBar}
        tabs={props.tabs}
        pills={props.pills}
        tabs={props.tabs}
        card={props.card}
        justified={props.justified}
        fill={props.fill}
        vertical={props.vertical}
        elList={props.elList}
        activeEl={activeEl}
        toggleEl={toggleEl}
      />
    </div>
  );
};

export default ContentNav