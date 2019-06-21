import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import { useStateValue } from "../state/state";
import SidebarIcons from "../images/SidebarIcons";

export default (props) => {
  // Gen class is only needed because of un-scopable component
  // due to global css requirement from Bootstrap >:-(
  const [genClass,] = useState('genClass' + Math.floor(Math.random() * 100))
  const [{ data }, dispatch] = useStateValue();
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
              "text-muted":
                props.tabs !== undefined || props.subNav !== undefined,
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
          color: ${data.css.activeColor} !important;
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
              ? `border-left: ${"3px solid " + data.css.activeColor};`
              : `border-bottom: ${"3px solid " + data.css.activeColor};`
          }
        }
        @media only screen and (max-width: 1100px) {
          .sub-main-nav-wrap,
          .side-nav-wrap {
            font-size: 13px;
          }
          .nav-link {
            padding: .5rem .4em;
          }
        }
      `}</style>
    </Nav>
  );
}