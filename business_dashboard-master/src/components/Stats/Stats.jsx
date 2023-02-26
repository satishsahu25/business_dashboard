import React from "react";
import "./stats.css";
import { useState } from "react";
import SimpleAreaChart from "../Charts/SimpleAreaChart";
import SimpleLineChart from "../Charts/SimpleLineChart";
import MixedBarChart from "../Charts/MixedBarChart";
import StackedBarChart from "../Charts/StackedBarChart";
import TinyBarChart from "../Charts/TinyBarChart";
import StackedAreaChart from "../Charts/StackedAreaChart";
import g1 from '../../images/g1.png'
import g2 from '../../images/g2.png'
import g3 from '../../images/g3.png'

const Stats = () => {
  const [type,settype]=useState();


  const data = [
    {
      name: "Jan",
      Rent: 3490,
      Profit: 4300,
    },
    {
      name: "Feb",
      Rent: 3800,
      Profit: 4500,
    },
    {
      name: "Mar",
      Rent: 2600,
      Profit: 4560,
    },
    {
      name: "Apr",
      Rent: 2700,
      Profit: 5200,
    },
    {
      name: "May",
      Rent: 3800,
      Profit: 4230,
    },
    {
      name: "Jun",
      Rent: 3490,
      Profit: 4260,
    },
    {
      name: "Jul",
      Rent: 3490,
      Profit: 4400,
    },
    {
      name: "Aug",
      Rent: 3600,
      Profit: 4560,
    },
    {
      name: "Sept",
      Rent: 3890,
      Profit: 3300,
    },
    {
      name: "Oct",
      Rent: 3900,
      Profit: 3700,
    },
    {
      name: "Nov",
      Rent: 5600,
      Profit: 3530,
    },
    {
      name: "Dec",
      Rent: 2000,
      Profit: 4350,
    },
  ];


  const handleselect=(e)=>{
            settype(e.target.value);
  }
  const renderchart=(type)=>{
      switch(type){
        case "SimpleAreaChart":
          return (
            <SimpleAreaChart
            xdatakey="name"
            data={data}
            area1key="Rent"
            // area2key="Profit"
            />
          )
        case "StackedAreaChart":
          return (
            <StackedAreaChart
            xdatakey="name"
            data={data}
            area1key="Rent"
            area2key="Profit"
            />
          );

        case "TinyBarChart":
          return (
            <TinyBarChart
            data={data}
            bar1key="Rent"
            bar2key="Profit"
            />
          )
        case "StackedBarChart":
          return (
          <StackedBarChart
          data={data}
          bar1key="Rent"
          bar2key="Profit"
          xdatakey="name"
          />
          )
        case "MixedBarChart":
          return (
          <MixedBarChart
          data={data}
          bar1key="Rent"
          bar2key="Profit"
          xdatakey="name"

          />
          )
        default :
        return (
          <SimpleLineChart
          xdatakey="name"
          line1key="Rent"
          line2key="Profit"
          data={data}
           />

        )

      }

  }

  return (

     <>
      <div className="statswrapper">
        <div className="topstats">
          <div className="topleft">
            <div className="topleftdesc">
              <span>Congratulations John!</span>
              <p>You have won gold medal</p>
              <h2>$49.6k</h2>
              <button className="salesbtn">View Sales</button>
            </div>
            <img src={g1} alt="" />
          </div>
          <div className="topright">
            <div className="top">
              <h3>Statistics</h3>
              <p>updated 1 month ago</p>
            </div>
            <div className="bottom">
              <div className="statitem">
                <i class="bx bx-trending-up"></i>
                <div className="statiteminfo">
                  <h2>230k</h2>
                  <p>Sales</p>
                </div>
              </div>
              <div className="statitem">
                <i class="bx bx-user"></i>
                <div className="statiteminfo">
                  <h2>780k</h2>
                  <p>Customers</p>
                </div>
              </div>
              <div className="statitem">
                <i class="bx bx-cube"></i>
                <div className="statiteminfo">
                  <h2>1.423k</h2>
                  <p>Products</p>
                </div>
              </div>
              <div className="statitem">
                <i class="bx bx-dollar"></i>
                <div className="statiteminfo">
                  <h2>$9745k</h2>
                  <p>Revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="midstats">
          <div className="midleft">
            <div className="midlefttop">
              <div className="midinnertopleft">
                <p>Orders</p>
                <h2>2,76k</h2>
                <img src={g2} alt="" />
              </div>
              <div className="midinnertopright">
                <p>Profit</p>
                <h2>6,24k</h2>
                <img src={g3} alt="" />
              </div>
            </div>
            <div className="midleftbottom">
              <div className="left">
                <h2>Earnings</h2>
                <p>This Month</p>
                <h4>$4055.56</h4>
                <span>68.2% more earnings than last month</span>
              </div>
              <div className="right">{/* <img src={backend} alt="" /> */}</div>
            </div>
          </div>
          <div className="midright">
            <div className="top">
              <select onChange={handleselect}>
                <option>Select type</option>
                <option value="SimpleLineChart">SimpleLineChart</option>
                <option value="SimpleAreaChart">SimpleAreaChart</option>
                <option value="StackedAreaChart">StackedAreaChart</option>
                <option value="TinyBarChart">TinyBarChart</option>
                <option value="StackedBarChart">StackedBarChart</option>
                <option value="MixedBarChart">MixedBarChart</option>
              </select>
            </div>
            <div className="bottom">
             {renderchart(type)}
            </div>
          </div>
        </div>
      </div>

     </>
  );
};

export default Stats;
