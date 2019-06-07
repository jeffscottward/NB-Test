import React from "react";
import Subnav from "./Subnav"

const CustomFields = () => (
  <div id="CustomFields">
    <Subnav>
      <label>People</label>
      <label>Donations</label>
    </Subnav>
    <style jsx>{`
      #CustomFields {
      }
    `}</style>
  </div>
);

export default CustomFields;