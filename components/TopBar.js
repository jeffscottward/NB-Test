import React from "react";

const TopBar = () => (
  <header id="Topbar">
    <div className="banner-row">
      <h1>Settings</h1>
      <input type="text" placeholder="Search People" />
      <img className="user-avatar" />
    </div>
    <nav>
      <ul>
        <li><a href="#"><label>Your account</label></a></li>
        <li><a href="#"><label>Contact</label></a></li>
        <li className="active"><a href="#"><label>Defaults</label></a></li>
        <li><a href="#"><label>Political</label></a></li>
        <li><a href="#"><label>Domains</label></a></li>
        <li><a href="#"><label>Payment Processors</label></a></li>
        <li><a href="#"><label>Apps</label></a></li>
        <li><a href="#"><label>Developer</label></a></li>
        <li><a href="#"><label>Database</label></a></li>
        <li><a href="#"><label>Privacy</label></a></li>
      </ul>
    </nav>
    <style jsx>{`
      #Topbar {
      }
      .banner-row {}
      ul {}
      li {}
      a {}
      i {}
    `}</style>
  </header>
)
export default TopBar;