import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import GlobalValues from "../constants/globalValues";
import SidebarIcons from "../images/SidebarIcons";

export default (props) => {
  const [genClass,] = useState('genClass' + Math.floor(Math.random() * 100))
  return (
    <Nav
      className={classnames({
        sideBar: props.sideBar,
        sideBarOpen: props.sideBar && props.sideBarOpen === true
      })}
      tabs={props.tabs !== undefined}
      vertical={props.vertical !== undefined}
    >
      {Object.keys(props.elList).map((item, index) => (
        <NavItem key={index}>
          <NavLink
            className={classnames({
              "text-muted": props.tabs !== undefined,
              "text-info": props.activeEl === item,
              ["follow " + genClass]: props.activeEl === item,
              active: props.activeEl === item
            })}
            onClick={() => {
              props.toggleActiveEl(item);
            }}
          >
            {props.sideBar && <SidebarIcons page={item} />}
            {props.sideBar && !props.sideBarOpen ? null : props.subNav ||
              props.mainNav ? (
              <span className="sub-main-nav-wrap">{item}</span>
            ) : (
              <span className="side-nav-wrap">{item}</span>
            )}
          </NavLink>
        </NavItem>
      ))}
      <style>{`
        .active {
          color: ${GlobalValues.css.activeColor} !important;
        }
        .sideBar a {
          padding-left: 40px;
        }
        .sideBar a.follow {
          padding-left: 37px;
        }
        .sub-main-nav-wrap {
          display: inline-block;
          padding: 0 0 10px 0;
        }
        .side-nav-wrap {
          display: inline-block;
          position: relative;
          top: 3px;
        }
        .follow.${genClass} {
          ${
            props.vertical
              ? `border-left: ${"3px solid " + GlobalValues.css.activeColor};`
              : `border-bottom: ${"3px solid " +
                  GlobalValues.css.activeColor};`
          }
        }
        .followBar.${genClass} {

        }
      `}</style>
    </Nav>
  );
}