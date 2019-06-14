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
      <style jsx>{`
        #SubNav {
          padding-top: 10px;
          border-bottom: ${data.css.divider};
        }
      `}</style>
    </div>
  );
}

export default SubNav