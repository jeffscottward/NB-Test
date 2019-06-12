import React from "react";

import Sidebar from '../components/SideBar'
import Topbar from "../components/Topbar";
import Navigation from "../components/Navigation";
import CustomFields from "../components/CustomFields";
import { Container, Row, Col } from "reactstrap";

import { StateProvider } from "../state/state";
import reducer from "../state/reducer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import GlobalValues from '../constants/globalValues'

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
        <br />
        <main>
          {/* <Sidebar /> */}
          <Container className="contentContainer">
            <Navigation
              tabs
              elList={GlobalValues.siteMap.pages.Settings.Defaults}
            />
            <CustomFields />
          </Container>
        </main>
      </StateProvider>
      <style jsx global>{`
        .contentContainer {
          margin-left: 15px;
        }
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
          background: ${GlobalValues.pageBgColor};
        }
        #Index {
          max-width: 1200px;
          margin: auto;
        }
        a {
          cursor: pointer;
        }
         {
          /* @font-face {
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
        } */
        }
      `}</style>
    </div>
  );
}

export default Index