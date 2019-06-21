import React from "react";
import { useStateValue } from "../state/state";
import Navigation from "./Navigation";

const SubNav = (props, children) => {
  const [{ data }, dispatch] = useStateValue();
  return (
    <div id="SubNav">
      <Navigation
        follow
        defaultEl={props.defaultEl}
        subNav
        elList={props.elList}
      />
      <div className="followBar-shadow" />
      <style jsx>{`
        #SubNav {
          overflow: hidden;
          position: relative;
          padding: 10px 10px 0 10px;
        }
        .followBar-shadow {
          border-bottom: ${data.css.divider};
          position: relative;
          top: -3px;
          left: -5%;
          width: 110%;
        }
      `}</style>
    </div>
  );
}

export default SubNav