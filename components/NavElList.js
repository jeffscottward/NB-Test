import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import GlobalValues from "../constants/globalValues";

export default (props) => {
  return (
    <Nav
      tabs={props.tabs !== undefined}
      pills={props.pills !== undefined}
      card={props.card !== undefined}
      justified={props.justified !== undefined}
      fill={props.fill !== undefined}
      vertical={props.vertical !== undefined}
    >
      {Object.keys(props.elList).map((item, index) => (
        <NavItem key={index}>
          <NavLink
            className={classnames({
              active: props.activeEl === index,
              "text-info": props.activeEl === index,
              follow: props.activeEl === index
            })}
            onClick={() => {
              props.toggleEl(index);
            }}
          >
            {item}
          </NavLink>
        </NavItem>
      ))}
      <style>{`
        .active {
          color: ${GlobalValues.activeColor};
        }
        .follow {
          border-bottom: ${"3px solid " + GlobalValues.activeColor};
        }
      `}</style>
    </Nav>
  );
}