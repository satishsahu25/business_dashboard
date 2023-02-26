import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [activated, setactivated] = useState(false);
  const handletoggle = () => {
    setactivated(!activated);
  };


  return (
      <div className={activated ? "sidebarwrapper active" : "sidebarwrapper"}>
        <div className="header">
          <div className="logocontent" onClick={handletoggle}>
            <i class="bx bxs-injection icon"></i>
            <span className="logotext icon">Blackcoffer</span>
            <div className="menubtn" onClick={handletoggle}>
            <i class="bx bx-menu"></i>
            </div>
          </div>
          <div className="searchbox">
            <i class="bx bx-search-alt-2" onClick={handletoggle}></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="lists">
          <div className="listitem" onClick={handletoggle}>
          <i class='bx bx-stats'></i>
            <span className="listname">Analytics</span>
          </div>
          <div className="listitem" onClick={handletoggle}>
          <i class='bx bx-envelope' ></i>
            <span className="listname">Emails</span>
          </div>
          <div className="listitem" onClick={handletoggle}>
          <i class='bx bx-message'></i>
            <span className="listname">Chats</span>
          </div>
          <div className="listitem" onClick={handletoggle}>
          <i class='bx bx-task'></i>
            <span className="listname">To-dos</span>
          </div>
          <div className="listitem" onClick={handletoggle}>
          <i class='bx bx-calendar'></i>
            <span className="listname">Calendar</span>
          </div>
          <div className="listitem" onClick={handletoggle}>
          <i class='bx bx-cart' ></i>
            <span className="listname">Ecommerce</span>
          </div>
          <div className="listitem" onClick={handletoggle}>
          <i class='bx bxs-user'></i>
            <span className="listname">Users</span>
          </div>
          <div className="listitem" onClick={handletoggle}>
          <i class='bx bx-cog' ></i>
            <span className="listname">Settings</span>
          </div>
          <div className="listitem" onClick={handletoggle}>
          <i class='bx bx-log-out'></i>
            <span className="listname">LogOut</span>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
