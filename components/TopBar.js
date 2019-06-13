import React from "react";
import GlobalValues from "../constants/globalValues";
import {Container, Row, Col, Input } from "reactstrap";
import dynamic from "next/dynamic";

const NavNoSSR = dynamic(() => import("../components/Navigation"), {
  ssr: false
});

const TopBar = () => (
  <header id="Topbar">
    <Container>
      <Row>
        <Col>
          <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Settings</h1>
        </Col>
        <Col className="nav-right">
          <Input
            type="text"
            name="search-people"
            id="search-people"
            className="search-people text-muted"
            placeholder="Search People"
          />
          <img className="user-avatar" src="https://placekitten.com/35/35" />
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
        </Col>
      </Row>
      <Row>
        <NavNoSSR
          follow
          defaultEl={"Defaults"}
          mainNav
          elList={GlobalValues.siteMap.pages.Settings}
        />
      </Row>
    </Container>
    <style>{`
      #Topbar {background: white; }
      .nav-right {
        display: flex;
        justify-content: flex-end;
      }
      .search-people {
        width: 70%;
        background: ${GlobalValues.css.formInputBgColor};
      }
      .user-avatar {
        margin-left: 20px;
        border-radius: 50%;
        width: 35px;
        height: 35px;
      }
    `}</style>
  </header>
);
export default TopBar;