import React from "react";
import Navigation from "../components/Navigation";
import GlobalValues from "../constants/globalValues";
import {Container, Row, Col, Input } from "reactstrap";

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
        <Col />
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
        <Navigation follow elList={GlobalValues.siteMap.pages.Settings} />
      </Row>
    </Container>
    <style>{`
      #Topbar {background: white; }
      .nav-right * {
        display: inline-block;
      }
      .search-people {
        width: 80%;
        background: ${GlobalValues.formInputBgColor};
      }
      .user-avatar {
        margin-left: 20px;
        border-radius: 50%;
      }
    `}</style>
  </header>
);
export default TopBar;