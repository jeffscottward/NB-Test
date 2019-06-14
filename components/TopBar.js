import React from "react";
import {Container, Row, Col, Input } from "reactstrap";
import { useStateValue } from "../state/state";
import Navigation from "./Navigation";

const TopBar = () => {
  const [{ data }, dispatch] = useStateValue();
  return (
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
            <div className="search-people-wrapper">
              <Input
                type="text"
                name="search-people"
                id="search-people"
                className="search-people text-muted"
                placeholder="Search People"
              />
            </div>
            <img
              className="user-avatar"
              src="https://placekitten.com/35/35"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
          </Col>
        </Row>
        <Row>
          <Navigation
            follow
            defaultEl={"Defaults"}
            mainNav
            elList={data.siteMap.pages.Settings}
          />
        </Row>
      </Container>
      <style>{`
        #Topbar {background: white; }
        .nav-right {
          display: flex;
          justify-content: flex-end;
        }
        .search-people-wrapper {
          width: 70%;
          position: relative;
        }
        .search-people {
          background: ${data.css.formInputBgColor};
          padding-left: 35px;
        }
        .search-people-wrapper::before {
          display: block;
          content: '';
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAUNJREFUOBGVk0lLxEAQRhO3UVFBHBDmFDyKgiBe/P94FRQ8CHMQQcF9EHFD8b1MVxszQ8APXnqp9NfV1UlZ/FWf4Raswxy8wQ2cwztMqEwzs7TbUKVxu/lk4gSu2gEXqh2o7KBbGMIFPMMK9GAA9/AKWRqY9m6aOaM9hRG8wANcgkdaho00/qatNcPTM6vYeTz6fZr+MXyBJpuQpYHu6nrcTH2a9lOKxPv1UAOrrax4lyIedavf1SACa12riUXc2mRp4D2rCubtTJHnXk3z3kSWBn4kFmoRDmAJmnLxXpq4o31sBss08I73U99qWzCPZtqxM93iA47A76NWFMQJU/Oe/Wi8LhfbV+5ssRfAzTy2ZkVkYF/5kil7VZpbMI1N20wOQZOcSduAWKcmTOIInasaQXc2/QGYSf+/Bqyp09fEf2j0A+p2PwSLZEVtAAAAAElFTkSuQmCC');
          width: 16px;
          height: 16px;
          position: absolute;
          top: 12px;
          left: 10px;
          z-index: 1;
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
}
export default TopBar;