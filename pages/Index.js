import React from "react";

import Sidebar from '../components/SideBar'
import Topbar from "../components/Topbar";
import TabContent from "../components/TabContent";
import { Container, Row, Col } from "reactstrap";

import { StateProvider } from "../state/state";
import reducer from "../state/reducer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import GlobalValues from '../constants/globalValues'

import dynamic from "next/dynamic";

const NavNoSSR = dynamic(() => import("../components/Navigation"), {
  ssr: false
});

const Index = () => {
  const initialState = {
    data: {
      someState: null
    }
  }
  return (
    <div id="Index">
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className="pushwrap">
          <Sidebar />
          <Topbar />
          <Container>
            <Row>
              <Col>
                <main>
                  <br />
                  <Row>
                    <Col>
                      <NavNoSSR
                        tabs
                        defaultEl={"Custom Fields"}
                        elList={GlobalValues.siteMap.pages.Settings.Defaults}
                      />
                      <TabContent
                        defaultSubNavEl={"People"}
                        elList={GlobalValues.siteMap.pages.Settings.Defaults['Custom Fields']}
                      />
                    </Col>
                  </Row>
                </main>
              </Col>
            </Row>
          </Container>
        </div>
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
        #Index {
        }
        .pushwrap {
          margin-left: 110px;
        }
        a {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Index