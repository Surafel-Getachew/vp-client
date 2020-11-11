import React from "react";
import { Liquid } from "@ant-design/charts";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  linearGradient,
} from "recharts";
// import PsychPage from "../../../component/Page/PsychPage";
import Layout from "../../../component/Layout/Layout";
import AppointmentCardItems from "../../../component/psychiatrist/PsychDashboard/AppointmentCardItems";
import FigureItem from "../../../component/psychiatrist/PsychDashboard/FigureItem";
import styles from "./psychDashboard.module.css";
const PsychDashboard = () => {
  var config = {
    percent: 0.74,
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return "done ".concat(percent * 100, "%");
        },
        style: {
          fontSize: 20,
          fill: "rgb(130, 130, 130)",
        },
      },
    },
    liquidStyle: function liquidStyle(_ref2) {
      var percent = _ref2.percent;
      return { fill: percent > 0.75 ? "#52C41A" : "#FAAD14" };
    },
    color: function color() {
      return "#5B8FF9";
    },
  };
  const data = [
    {
      name: "Mon",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Tue",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Wed",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Thur",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Fri",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sat",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sun",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const figures = [
    {
      color: "#40A9FF",
      Icon: "fas fa-user-injured",
      name: "Patient",
      totalNum: "92",
      backgroundColor: "rgba(64, 169, 255,0.3)",
    },
    {
      color: "#3ade99",
      Icon: "fas fa-calendar",
      name: "Appointments",
      totalNum: "102",
      backgroundColor: "rgba(58, 222, 153, 0.3)",
    },
    {
      color: "#fd7e14",
      Icon: "far fa-newspaper",
      name: "Article",
      totalNum: "61",
      backgroundColor: "rgb(253, 126, 20,0.3)",
    },
  ];
  return (
    <Layout>
      <div className={styles.dashboard}>
        <div className={styles.welcome}>
          <div className={styles.welcomeTxt}>
            <h2>
              {" "}
              <b>Welcome</b> Surafel!
            </h2>
            <p>
              You have <b>7 patinets</b> remaining today!
            </p>
            <p className={styles.second}>
              make sure to check documentation before call.
            </p>
          </div>
          <div className={styles.docImg}>
            <img src={require("../../../assets/dashboard_doc.svg")} alt="" />
          </div>
        </div>
        <div className={styles.dashBoardContent}>
          <div id="apptCardId" className={styles.apptCard}>
            <h4>Today's Appointment</h4>
            <AppointmentCardItems
              name="Emma watson"
              avi={require("../../../assets/person8.jpg")}
            />
            <AppointmentCardItems
              name="senke demelash"
              avi={require("../../../assets/person2.jpg")}
            />
            <AppointmentCardItems
              name="belayneh wase"
              avi={require("../../../assets/person7.jpg")}
            />
            <AppointmentCardItems
              name="jon doe"
              avi={require("../../../assets/person5.jpg")}
            />
            <AppointmentCardItems
              name="alehege degu"
              avi={require("../../../assets/person7.jpg")}
            />
            <AppointmentCardItems
              name="ermias aklilu"
              avi={require("../../../assets/person6.jpg")}
            />
            <AppointmentCardItems
              name="alehege degu"
              avi={require("../../../assets/person7.jpg")}
            />
            <AppointmentCardItems
              name="alehege degu"
              avi={require("../../../assets/person7.jpg")}
            />
            <AppointmentCardItems
              name="alehege degu"
              avi={require("../../../assets/person7.jpg")}
            />
            <AppointmentCardItems
              name="alehege degu"
              avi={require("../../../assets/person7.jpg")}
            />
          </div>
          <div className={styles.numbers}>
            <div className={styles.dashboardFigures}>
              {figures.map((figure) => (
                <FigureItem
                  colors={figure.color}
                  Icon={figure.Icon}
                  name={figure.name}
                  totalNum={figure.totalNum}
                  backgroundColor={figure.backgroundColor}
                />
              ))}
            </div>
            <div className={styles.graphs}>
              <AreaChart
               className={styles.areaChart}
               width={400}
               height={200}
               data={data}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6f3ad9" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#6f3ad9" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#6f3ad9"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
              {/* <AreaChart
                className={styles.areaChart}
                width={400}
                height={200}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart> */}
              <Liquid
                className={styles.liquid}
                {...config}
                style={{
                  width: "120px",
                  height: "180px",
                  textAlign: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PsychDashboard;
