import React from "react";

import Sidebar from '../components/SideBar'
import Topbar from "../components/Topbar";
import TabArea from "../components/TabArea";
import CustomFields from "../components/CustomFields";

import { StateProvider } from "../state/state";
import reducer from "../state/reducer";

const Index = () => {
  const initialState = {
    data: {
      someState: null
    }
  }
  return (
    <div id="Index">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Topbar />
        <main>
          <Sidebar />
          <TabArea />
          <CustomFields />
        </main>
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
        }
        ul {
          display: flex;
        }
        ul,
        li {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        #__next {
          display: flex;
          flex-direction: column;
        }
        button {
          cursor: pointer;
        }

        @font-face {
          font-family: "Aktiv Grotesk";
          src: url("AktivGrotesk-Regular.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "Merriweather";
          src: url("Merriweather-BoldItalic.ttf") format("truetype");
          font-weight: bold;
          font-style: italic;
        }

        @font-face {
          font-family: "Aktiv Grotesk";
          src: url("AktivGrotesk-Light.ttf") format("truetype");
          font-weight: 300;
          font-style: normal;
        }

        @font-face {
          font-family: "Merriweather";
          src: url("Merriweather-LightItalic.ttf") format("truetype");
          font-weight: 300;
          font-style: italic;
        }

        @font-face {
          font-family: "Aktiv Grotesk";
          src: url("AktivGrotesk-Medium.ttf") format("truetype");
          font-weight: 500;
          font-style: normal;
        }

        @font-face {
          font-family: "Aktiv Grotesk Hair";
          src: url("AktivGrotesk-Hair.ttf") format("truetype");
          font-weight: 300;
          font-style: normal;
        }

        @font-face {
          font-family: "Aktiv Grotesk";
          src: url("AktivGrotesk-MediumItalic.ttf") format("truetype");
          font-weight: 500;
          font-style: italic;
        }

        @font-face {
          font-family: "Aktiv Grotesk";
          src: url("AktivGrotesk-Thin.ttf") format("truetype");
          font-weight: 100;
          font-style: normal;
        }

        @font-face {
          font-family: "Merriweather";
          src: url("Merriweather-Black.ttf") format("truetype");
          font-weight: 900;
          font-style: normal;
        }

        @font-face {
          font-family: "Aktiv Grotesk";
          src: url("AktivGrotesk-BoldItalic.ttf") format("truetype");
          font-weight: bold;
          font-style: italic;
        }

        @font-face {
          font-family: "Aktiv Grotesk";
          src: url("AktivGrotesk-ThinItalic.ttf") format("truetype");
          font-weight: 100;
          font-style: italic;
        }

        @font-face {
          font-family: "Merriweather";
          src: url("Merriweather-Bold.ttf") format("truetype");
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: "Merriweather";
          src: url("Merriweather-Italic.ttf") format("truetype");
          font-weight: normal;
          font-style: italic;
        }

        @font-face {
          font-family: "Merriweather";
          src: url("Merriweather-Light.ttf") format("truetype");
          font-weight: 300;
          font-style: normal;
        }

        @font-face {
          font-family: "Aktiv Grotesk";
          src: url("AktivGrotesk-Italic.ttf") format("truetype");
          font-weight: normal;
          font-style: italic;
        }

        @font-face {
          font-family: "Merriweather";
          src: url("Merriweather-Regular.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "Merriweather";
          src: url("Merriweather-BlackItalic.ttf") format("truetype");
          font-weight: 900;
          font-style: italic;
        }

        @font-face {
          font-family: "Aktiv Grotesk";
          src: url("AktivGrotesk-Bold.ttf") format("truetype");
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: "Aktiv Grotesk";
          src: url("AktivGrotesk-LightItalic.ttf") format("truetype");
          font-weight: 300;
          font-style: italic;
        }

        @font-face {
          font-family: "Aktiv Grotesk Hair";
          src: url("AktivGrotesk-HairItalic.ttf") format("truetype");
          font-weight: 300;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}

export default Index