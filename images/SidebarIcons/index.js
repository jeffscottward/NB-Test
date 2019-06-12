import React from "react";

import Dashboard from './Dashboard.png'
import People from './People.png'
import Website from './Website.png'
import Communication from './Communication.png'
import Finances from './Finances.png'
import Nations from './Nations.png'
import Settings from './Settings.png'

const imageReducer = (pageName) => {
  switch (pageName) {
    case "Dashboard":
      return Dashboard;
    case "People":
      return People;
    case "Website":
      return Website;
    case "Communication":
      return Communication;
    case "Finances":
      return Finances;
    case "Nations":
      return Nations;
    case "Settings":
      return Settings;
  }
}

const SidebarIcons = (props) => {
  
  return (
    <>
      <img src={imageReducer(props.page)} alt={props.page} />
      <style jsx>
        {`
          img {
            display: inline-block;
            padding-right: 20px;
          }
        `}
      </style>
    </>
  );
}

export default SidebarIcons;
