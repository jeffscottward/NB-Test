import React from "react";
import FontAwesome from '@fortawesome/fontawesome-free'

const Sidebar = () => (
  // console.log(FontAwesome)
  <nav id="Sidebar">
    <div className="logo" />
    <ul>
      <li>
        <a href="#">
          <i className="Dashboard" />
          <label>Dashboard</label>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="People" />
          <label>People</label>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="Website" />
          <label>Website</label>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="Communication" />
          <label>Communication</label>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="Finances" />
          <label>Finances</label>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="Nations" />
          <label>Nations</label>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="Settings" />
          <label>Settings</label>
        </a>
      </li>
    </ul>
    <style jsx>{`
      #Sidebar {
      }
      .logo {
      }
      ul {
        display: flex;
        flex-direction: column;
      }
      li {
      }
      a {
      }
      i {
      }

       {
        /*
      
        <div class="container">
          <aside class="sidebar">
          </aside>
          <section class="content">
            <button class="btn">Toggle</button>
          </section>
        </div>

        @mixin transitionAll() {
          transition: all .3s ease-out;
        }

        html, body {
          height: 100%;
        }
        .container {
          display: flex;
          width: 100%;
          height: 100%;
        }
        .sidebar {
          flex: 1 0 300px;
          background: #333;
          height: 100%;
          @include transitionAll();
          &.is-collapsed {
            transform: translateX(-100%);
          }
        }
        .content {
          width: 100%;
          height: 100%;
          padding: 1rem;
          background: #999;
          @include transitionAll();
          &.is-full-width {
            margin-left: -300px;
          }
        }
      
      */
      }
    `}</style>
  </nav>
);
export default Sidebar;