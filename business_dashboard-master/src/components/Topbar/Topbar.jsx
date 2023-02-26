import React from "react";
import "./topbar.css";
import profimage from '../../images/p1.jpg'

const Topbar = () => {


  return (
    <div className="profilebar" >
      <div className="profilewrapper">
        <div className="profileleft">
          <div>
            <i class="bx bx-calendar"></i>
          </div>
          <div>
            <i class="bx bx-message"></i>
          </div>
          <div>
            <i class="bx bx-envelope"></i>
          </div>
          <div>
            <i class="bx bx-task"></i>
          </div>
        </div>
        <div className="profileright">
          <div>
            <i class="bx bx-sun"></i>
          </div>
          <div>
            <i class="bx bx-search"></i>
          </div>
          <div className="notifydiv">
            <i class="bx bx-cart"></i>
            <div className="cartnotifynum">6</div>
          </div>
          <div className="notifydiv">
            <i class="bx bxs-bell"></i>
            <div className="bellnotifynum">6</div>
          </div>
          <div className="profilename">
            <div className="profname">Satish Sahu</div>
            <div className="profauth">admin</div>
          </div>
          <div className="profimg">
            <img src={profimage} alt="" />
            <div className="profstatus"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
