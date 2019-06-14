import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { StateProvider } from "../state/state";
import reducer from "../state/reducer";
import GlobalValues from '../constants/globalValues'

import dynamic from "next/dynamic";
const AppBodyNoSSR = dynamic(() => import("../components/AppBody"), {
  ssr: false
});

const Index = () => {
  const initialState = {
    data: GlobalValues
  };
  return (
    <div id="Index">
      <StateProvider initialState={initialState} reducer={reducer}>
        <AppBodyNoSSR />
      </StateProvider>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: "Aktiv Grotesk";
          font-size: 16px;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          background: ${GlobalValues.css.pageBgColor};
        }
        a {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Index