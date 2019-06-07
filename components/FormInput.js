import React from "react";

export default (FormInput = props => (
  <div className="FormInput">
    <label>
      {props.label}
      {props.required ? "*" : null}
    </label>
    <input type="text" onChange={props.onChange} />
    <style jsx>{`
      .FormInput {
      }
    `}</style>
  </div>
));