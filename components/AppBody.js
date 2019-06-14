import React from "react";
import Sidebar from "../components/SideBar";
import Topbar from "../components/Topbar";
import PageLayout from "../components/PageLayout";

const AppBody = (props) => {
  return (
    <>
      <div className="pushwrap">
        <Sidebar />
        <Topbar />
        <PageLayout />
        <style jsx>{`
          .pushwrap {
            margin-left: 110px;
          }
        `}</style>
      </div>
    </>
  );
};

export default AppBody